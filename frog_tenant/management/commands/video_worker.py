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

from django.core.management.base import BaseCommand

from frog_tenant import video_worker


class Command(BaseCommand):
    help = 'Run a worker process to convert video files as they are uploaded'

    def add_arguments(self, parser):
        parser.add_argument('-q', '--quality', default='medium', help='Video output quality')
        parser.add_argument('-e', '--email-user', default=False, dest='emailuser', action='store_true', help='Email user when processing their video has completed')

    def handle(self, *args, **options):
        video_worker.LOGGER.info('Starting Worker')
        try:
            thread = video_worker.VideoThread(
                quality=options['quality'],
                emailuser=options['emailuser']
            )
            thread.start()
            thread.join()
        except Exception as err:
            video_worker.LOGGER.error(err)
