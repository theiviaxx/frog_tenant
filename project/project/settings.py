"""
Django settings for project project.

Generated by 'django-admin startproject' using Django 2.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import sys

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(PROJECT_ROOT)

#  Add frog_tenant
sys.path.append(os.path.dirname(BASE_DIR))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '_5=bx%7_iowm#wq1+j+5878%q)=r3fo7fo($v)hut1cpqs1i&o'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition

SHARED_APPS = (
    "django_tenants",
    "frog_tenant",
    
    "django.contrib.contenttypes",
    "django.contrib.staticfiles"
)
TENANT_APPS = (
    # The following Django contrib apps must be in TENANT_APPS
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "django.contrib.admin",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.sites",
    "django_comments",
    "frog",
)
INSTALLED_APPS = list(SHARED_APPS) + [
    app for app in TENANT_APPS if app not in SHARED_APPS
]

MIDDLEWARE = [
    'project.middleware.FrogTenantMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "django_tenants.middleware.main.TenantMainMiddleware",
]

ROOT_URLCONF = 'project.urls'
PUBLIC_SCHEMA_URLCONF = 'project.urls_public'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django_tenants.postgresql_backend",
        "NAME": "frog_mulitenant",
        "USER": "todo",
        "PASSWORD": "todo",
        "PORT": "5432",
    }
}
DATABASE_ROUTERS = ("django_tenants.routers.TenantSyncRouter",)


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles1')
STATIC_URL = '/static/'
 
# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
    # os.path.join(os.path.dirname(BASE_DIR), 'frog_tenant', 'static'),
)



AUTHENTICATION_BACKENDS = ("frog.auth.SimpleAuthBackend",)
MEDIA_ROOT = "/Users/brett/Envs/static/tenants/"
MEDIA_URL = "/frogstatic/"

TENANT_MODEL = "frog_tenant.Client"  # app.Model
TENANT_DOMAIN_MODEL = "frog_tenant.Domain"  # app.Model
DEFAULT_FILE_STORAGE = "django_tenants.files.storage.TenantFileSystemStorage"
MULTITENANT_RELATIVE_MEDIA_ROOT = "%s"

FROG_FFMPEG = "c:/bin/ffmpeg.exe"
FROG_FFPROBE = "c:/bin/ffprobe.exe"
FROG_SITE_URL = ""
FROG_QUERY_MODELS = ("image", "video")
FROG_VIDEO_TEMP = "/tmp"

HAYSTACK_CONNECTIONS = {
    "default": {
        "ENGINE": "haystack.backends.simple_backend.SimpleEngine",
        "PATH": os.path.join(BASE_DIR, "whoosh_index"),
    }
}

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    'filters': {
        'tenant_context': {
            '()': 'django_tenants.log.TenantContextFilter'
        },
    },
    'formatters': {
        'tenant_context': {
            'format': '[%(schema_name)s:%(domain_url)s] '
            '%(levelname)-7s %(asctime)s %(message)s',
        },
    },
    "handlers": {
        "file": {
            "level": "DEBUG",
            "class": "logging.FileHandler",
            "filename": os.path.join(BASE_DIR, "django.log"),
            "filters": ['tenant_context'],
        },
        "file_frog": {
            "level": "DEBUG",
            "class": "logging.FileHandler",
            "filename": os.path.join(BASE_DIR, "frog.log"),
            "filters": ['tenant_context'],
            'formatter': 'tenant_context'
        },
        "video_worker": {
            "level": "DEBUG",
            "class": "logging.FileHandler",
            "filename": os.path.join(BASE_DIR, "video_worker.log"),
            "filters": ['tenant_context'],
            'formatter': 'tenant_context'
        },
        'console': {
            'class': 'logging.StreamHandler',
            'filters': ['tenant_context'],
            'formatter': 'tenant_context'
        },
    },
    "loggers": {
        "django": {"handlers": ["file", "console"], "level": "INFO", "propagate": True},
        "frog": {
            "handlers": ["file_frog"],
            "level": "DEBUG",
            "propagate": True,
        },
        "video_worker": {
            "handlers": ["video_worker"],
            "level": "DEBUG",
            "propagate": True,
        },
    },
}
