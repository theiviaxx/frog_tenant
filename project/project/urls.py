from django.contrib import admin
from django.conf.urls import url, include



urlpatterns = [
    url('admin/', admin.site.urls),
    url('^frog/', include('frog.urls')),
]
