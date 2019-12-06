from django.db import models
from django_tenants.models import TenantMixin, DomainMixin


class Client(TenantMixin):
    name = models.CharField(max_length=100)
    created_on = models.DateField(auto_now_add=True)
    space_quota = models.IntegerField(default=50)

    auto_create_schema = True

    def toJson(self):
        return {
            'id': self.id,
            'name': self.schema_name,
            'created': self.created_on.isoformat(),
            'domain': self.domains.first().domain,
            'space_quota': self.space_quota,
        }


class Domain(DomainMixin):
    pass
