from django.contrib import admin

from .models import People, PeopleFound

# Register your models here.

admin.site.register(People)
admin.site.register(PeopleFound)
