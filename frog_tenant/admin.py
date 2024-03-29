from django.db import models
from django.contrib import admin
from django_tenants.admin import TenantAdminMixin

from frog_tenant.models import Client

@admin.register(Client)
class ClientAdmin(TenantAdminMixin, admin.ModelAdmin):
    list_display = ('name', 'created_on')