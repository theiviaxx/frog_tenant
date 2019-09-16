##################################################################################################
# Copyright (c) 2012 Brett Dixon
#
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to use,
# copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
# Software, and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
##################################################################################################


import subprocess
import argparse
import shutil
import logging.config
from threading import Thread, Event
from collections import namedtuple

from django.conf import settings
from django.core.mail import send_mail, mail_admins
from django.template.loader import render_to_string
from django.core.exceptions import ImproperlyConfigured
from django.db import connection, OperationalError

import path
from django_tenants.utils import tenant_context

from frog import getRoot
from frog.models import VideoQueue, SiteConfig
from frog_tenant.models import Client

try:
    FROG_FFMPEG = getattr(settings, "FROG_FFMPEG")
    FROG_FFPROBE = getattr(settings, "FROG_FFPROBE")
    FROG_VIDEO_TEMP = getattr(settings, "FROG_VIDEO_TEMP")
except AttributeError:
    raise ImproperlyConfigured(
        "FROG_FFMPEG and FROG_FFPROBE and FROG_VIDEO_TEMP are required"
    )

FROG_SCRUB_DURATION = getattr(settings, "FROG_SCRUB_DURATION", 60)
FROG_FFMPEG_ARGS = getattr(
    settings,
    "FROG_FFMPEG_ARGS",
    "-vcodec libx264 -b:v {0}k -pix_fmt yuv420p -movflags faststart -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 -acodec aac -b:a {1}k -ac 2 -y",
)

TIMEOUT = 1
QualitySetting = namedtuple("QualitySetting", ("video", "audio"))
ROOT = getRoot()
LOGGER = logging.getLogger("video_worker")
QUALITY = {
    "low": QualitySetting(1250, 56),
    "medium": QualitySetting(2500, 56),
    "high": QualitySetting(10000, 128),
}


class VideoThread(Thread):
    def __init__(
        self,
        quality="medium",
        emailuser=False,
        *args,
        **kwargs
    ):
        super(VideoThread, self).__init__(*args, **kwargs)
        self.daemon = True
        self.stop_event = Event()

        self._quality = quality
        self._emailuser = emailuser

        LOGGER.info("Options quality={}, emailuser={}".format(self._quality, self._emailuser))

    def stop(self):
        self.stop_event.set()

    def run(self):
        while not self.stop_event.is_set():
            clients = Client.objects.exclude(schema_name="public")
            for client in clients:
                with tenant_context(client):
                    try:
                        item = VideoQueue.objects.filter(status=VideoQueue.QUEUED).first()
                    except OperationalError:
                        # Reset the connection to the db
                        connection.close()
                        item = None

                    if not item:
                        self.stop_event.wait(TIMEOUT)
                        continue

                    LOGGER.info("Working on %s", item.video.guid)

                    try:
                        self.convert_video(item)
                    except Exception as err:
                        LOGGER.error(str(err))
                        if self._emailuser:
                            emailUser(item.video, err)
                        mail_admins("Video Processing Failure", str(err))
                        item.status = VideoQueue.ERROR
                        item.save()

    def convert_video(self, item):
        video = item.video

        # -- Set the video to processing
        LOGGER.info("Processing video: %s" % video.guid)
        item.status = VideoQueue.PROCESSING
        item.message = "Processing video..."
        item.save()

        sourcepath = getRoot() / video.source.name

        # -- Get the video information
        videodata = video.info()
        isH264 = "h264" in videodata["codec"] and sourcepath.ext == ".mp4"

        tempfile = path.Path(FROG_VIDEO_TEMP) / "{}.mp4".format(video.hash)
        outfile = sourcepath.parent / "{}.mp4".format(video.hash)

        # -- Further processing is needed if not h264 or needs to be scrubbable
        if isH264:
            # -- No further processing
            video.video = video.source.name
        else:
            LOGGER.info("Converting video: %s" % video.guid)
            item.message = "Converting to MP4..."
            item.save()

            args = FROG_FFMPEG_ARGS
            cmd = [FROG_FFMPEG, "-i", str(sourcepath)]
            width = (
                item.video.width - 1
                if item.video.width % 2
                else item.video.width
            )
            height = (
                item.video.height - 1
                if item.video.height % 2
                else item.video.height
            )

            if width != item.video.width or height != item.video.height:
                cmd += [
                    "-filter:v",
                    "crop={0}:{1}:0:0".format(width, height),
                ]
            cmd += args.format(*QUALITY[self._quality]).split(" ")
            cmd += [str(tempfile)]

            LOGGER.debug(cmd)
            subprocess.call(cmd)

            video.video = outfile.replace("\\", "/").replace(ROOT, "")
            shutil.move(tempfile, outfile)

        # -- Set the video to the result
        item.delete()
        video.save()

        if self._emailuser:
            # -- Email User
            emailUser(video)


def emailUser(video, error=None):
    """Emails the author of the video that it has finished processing"""
    config = SiteConfig.getSiteConfig()
    html = render_to_string(
        "frog/video_email.html",
        {
            "user": video.author,
            "error": error,
            "video": video,
            "SITE_URL": config.site_url,
        },
    )
    subject, from_email, to = (
        "Video Processing Finished{}".format(error or ""),
        "noreply@frogmediaserver.com",
        video.author.email,
    )
    text_content = "This is an important message."
    html_content = html

    send_mail(
        subject, text_content, from_email, [to], html_message=html_content
    )


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--quality", default="medium")
    parser.add_argument(
        "--always-convert", action="store_true", dest="alwaysconvert"
    )
    parser.add_argument("--email-user", action="store_true", dest="emailuser")

    args = parser.parse_args()

    LOGGER.info("Starting Worker")
    try:
        thread = VideoThread(
            quality=args.quality,
            alwaysconvert=args.alwaysconvert,
            emailuser=args.emailuser,
        )
        thread.start()
        thread.join()
    except Exception as err:
        LOGGER.error(err)


if __name__ == "__main__":
    main()
