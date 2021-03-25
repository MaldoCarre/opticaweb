from django.db import models

# Create your models here.

class Lente (models.Model):
    barcode = models.CharField(max_length=200,blank=True,null=True)
    marca = models.CharField(max_length=100,blank=True,null=True)
    modelo = models.CharField(max_length=100,blank=True,null=True)
    descripcion = models.TextField(blank=True,null=True)
    cantidad = models.IntegerField(blank=True,null=True)
    precio = models.CharField(max_length=100,blank=True,null=True)