from django.db import models
from core.models import Lente,Receta

# Create your models here.

class Venta_Lente (models.Model):
    lente = models.ForeignKey(Lente, verbose_name="Lentes", on_delete=models.CASCADE,blank=True,null=True)
    feca_venta = models.DateField(auto_now_add=True)

class Venta_Receta (models.Model):
    receta = models.ForeignKey(Receta, verbose_name="Recetas", on_delete=models.CASCADE,blank=True,null=True)
    fecha_venta_receta = models.DateField(auto_now_add=True)