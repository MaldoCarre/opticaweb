from django.contrib import admin
from.models import Pacientes,Estudio,InstitucionMedica
# Register your models here.
class PorjectAdmin(admin.ModelAdmin):
    readonly_fields=('created','updated')

admin.site.register(Pacientes) #asi hago visible la base de datos de esta app en el sitio administrador de django.
admin.site.register(Estudio) # se agrego al admin la tabla de estudio nueva y la de paciente.
admin.site.register(InstitucionMedica)