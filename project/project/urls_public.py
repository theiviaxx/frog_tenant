from django.contrib import admin
from django.conf.urls import url

from frog_tenant.views import index, HomePageView

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^$', HomePageView.as_view()),
    url(r'^tenant/$', index),
]
