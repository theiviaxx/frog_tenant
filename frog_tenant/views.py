import os
import json
import datetime
import math
import re
import pathlib

from django.core.management import call_command
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, Group
from django.contrib.sites.models import Site
from django.db.models import Count, Sum

from django_tenants.utils import tenant_context

from frog_tenant.models import Client, Domain
from frog.models import Gallery, Image, Video, SiteConfig
from frog import getRoot


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)


@csrf_exempt
def index(request):
    if request.method == "GET":
        return get(request)
    elif request.method == "POST":
        return post(request)


def get(request):
    res = {
        "items": []
    }
    for client in Client.objects.exclude(schema_name="public"):
        with tenant_context(client):
            image = Image.objects.first()
            siteconfig = SiteConfig.objects.first()

            numdays = 7
            today = datetime.datetime.today()
            last_30_days = today - datetime.timedelta(numdays)
            week_history = Image.objects.filter(created__gte=last_30_days).extra(select={'day': 'date(created)'}).values('day').annotate(dcount=Count('created'))
            history = [today - datetime.timedelta(days=_) for _ in range(numdays)]
            hist = [0 for _ in range(numdays)]
            for i, _ in enumerate(history):
                for obj in week_history:
                    if obj['day'].day == _.day:
                        hist[i] = obj['dcount']

            item = client.toJson()
            item['image'] = image.json() if image else None
            item['image_count'] = Image.objects.all().count()
            item['video_count'] = Video.objects.all().count()
            item['site_config'] = siteconfig.json() if siteconfig else None
            try:
                item['managers'] = json.loads(serializers.serialize("json", Group.objects.get(name="managers").user_set.all()))
            except:
                item['managers'] = []
            item['user_count'] = User.objects.all().count()
            item['history'] = hist
            item['space_used'] = math.ceil(getFolderSize(getRoot())/float(1<<27))

            res["items"].append(item)
    
    return JsonResponse(res)


def post(request):
    data = json.loads(request.body)["body"]
    name = data["domain"].replace(".", "_").replace("-", "_")
    quota = data["quota"]
    created = False

    client = Client.objects.filter(schema_name=name)
    if client:
        client = client[0]
    else:
        client = Client(schema_name=name, name=name, space_quota=quota)
        client.save()
        created = True

    if not client.domains.count():
        domain = Domain()
        domain.domain = data["domain"]
        domain.tenant = client
        domain.is_primary = True
        domain.save()

    with tenant_context(client):
        if created:
            # Create superuser
            call_command("createsuperuser", username="admin", email="admin@{}".format(data["domain"]), interactive=False)

            # Run Fixtures
            call_command("loaddata", "initial_data.json", app="frog")

        item = client.toJson()
        item['image'] = None
        item['image_count'] = Image.objects.all().count()
        item['video_count'] = Video.objects.all().count()
        item['site_config'] = None
        item['managers'] = []
        item['user_count'] = User.objects.all().count()
        item['history'] = []
        item['space_used'] = math.ceil(getFolderSize(getRoot()) / float(1 << 27))
        item['tenant_created'] = created

        staticroot = pathlib.Path(getRoot())
        if not staticroot.exists():
            staticroot.mkdir(parents=True)

        res = item
    
    return JsonResponse(res)


def getFolderSize(path):
    total = 0
    if os.path.exists(path):
        for entry in os.scandir(path):
            if entry.is_file():
                total += entry.stat().st_size
            elif entry.is_dir():
                total += getFolderSize(entry.path)

    return total