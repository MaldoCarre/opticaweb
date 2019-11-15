from django.contrib import admin
from.models import FuncionVentricular
# Register your models here.

class PorjectAdmin(admin.ModelAdmin):
    readonly_fields=('created','updated')

admin.site.register(FuncionVentricular)