import json
import datetime
import re

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
            siteconfig = None# SiteConfig.objects.first(){}

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

            res["items"].append({
                'id': client.id,
                'name': client.schema_name,
                'created': client.created_on.isoformat(),
                'domain': client.domains.first().domain,
                'image': image.json() if image else None,
                'image_count': Image.objects.all().count(),
                'video_count': Video.objects.all().count(),
                'site_config': siteconfig.json() if siteconfig else None,
                'managers': [],#json.loads(serializers.serialize("json", Group.objects.get(name="managers").user_set.all())),
                'user_count': User.objects.all().count(),
                'history': hist
            })
    
    return JsonResponse(res)


def post(request):
    data = json.loads(request.body)["body"]
    name = data["domain"].replace(".", "_").replace("-", "_")
    created = False

    client = Client.objects.filter(schema_name=name)
    if client:
        client = client[0]
    else:
        client = Client(schema_name=name, name=name)
        client.save()
        created = True

    if not client.domains.all():
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
    
        res = {
            'id': client.id,
            'name': client.schema_name,
            'created': client.created_on.isoformat(),
            'domain': client.domains.first().domain,
            'image': None,
            'image_count': Image.objects.all().count(),
            'video_count': Video.objects.all().count(),
            'site_config': None,
            'managers': [],
            'user_count': User.objects.all().count(),
            'history': [],
            'tenant_created': created
        }
    
    return JsonResponse(res)
