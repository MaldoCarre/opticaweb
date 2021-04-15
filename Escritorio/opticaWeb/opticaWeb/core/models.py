from django.db import models

# Create your models here.

class Lente (models.Model):
    barcode = models.CharField(max_length=200,blank=True,null=True)
    marca = models.CharField(max_length=100,blank=True,null=True)
    modelo = models.CharField(max_length=100,blank=True,null=True)
    descripcion = models.TextField(blank=True,null=True)
    cantidad = models.IntegerField(blank=True,null=True)
    precio = models.CharField(max_length=100,blank=True,null=True)


############################################ Rreseta ########################################

class Receta (models.Model):
    nombre = models.CharField(max_length=100,blank=True , null=True)
    apellido = models.CharField(max_length=100,blank=True , null=True)
    localidad = models.CharField(max_length=100,blank=True , null=True)
    dni = models.CharField(max_length=100,blank=True , null=True)
    telefono = models.CharField(max_length=100,blank=True , null=True)
    ############## terminan datos del cliente ###############

    ############## datos de la receta del cliente ###########
    numero_receta = models.IntegerField(blank=True,null=True)
    fecha = models.DateField(auto_now_add=True)
        #### datos ojo derecho ###
    d_esf = models.CharField(max_length=50,blank=True,null=True)
    d_cil = models.CharField(max_length=50,blank=True,null=True)
    d_eje = models.CharField(max_length=50,blank=True,null=True)
    d_alt = models.CharField(max_length=50,blank=True,null=True)
    d_d_int = models.CharField(max_length=50,blank=True,null=True)
        #### datos ojo izquierdo ###
    i_esf = models.CharField(max_length=50,blank=True,null=True)
    i_cil = models.CharField(max_length=50,blank=True,null=True)
    i_eje = models.CharField(max_length=50,blank=True,null=True)
    i_alt = models.CharField(max_length=50,blank=True,null=True)
    i_d_int = models.CharField(max_length=50,blank=True,null=True)
    calibrado = models.CharField(max_length=100,blank=True,null=True)
    armazon = models.CharField(max_length=100,blank=True,null=True)
    tam_pel = models.CharField(max_length=50,blank=True,null=True)
    alt_OD = models.CharField(max_length=50,blank=True,null=True)
    distancia = models.CharField(max_length=100,blank=True,null=True)
    material_de_cristal = models.CharField(max_length=100,blank=True,null=True)
    color_cristal = models.CharField(max_length=100,blank=True,null=True)
    observacion = models.TextField(blank=True,null=True)
    total = models.CharField(max_length=50,blank=True,null=True)