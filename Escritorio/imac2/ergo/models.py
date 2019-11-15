from django.db import models
from core.models import Pacientes,Estudio
# Create your models here.

class Ergometria(models.Model):
    id_ergo=models.AutoField(primary_key=True)
    estudio=models.OneToOneField(Estudio,null=True,on_delete=models.CASCADE)
    paciente_ergo=models.ForeignKey(Pacientes,null=True,on_delete=models.CASCADE)
    ciclo_ergo=models.BooleanField(default=False, blank=True)
    banda_ergo=models.BooleanField(default=False, blank=True)
    carga = models.CharField(max_length=150,verbose_name="Carga",null=True)
    fc_basal = models.IntegerField (verbose_name="Fc basal",null=True)
    tas_basal = models.IntegerField(verbose_name="Tas basal",null=True)
    tad_basal = models.IntegerField(verbose_name="Tad basal",null=True)
    fc_esfuerzo = models.IntegerField(verbose_name="Fc esfuerzo",null=True)
    tas_esfuerzo = models.IntegerField(verbose_name="Tas esfuerzo",null=True)
    tad_esfuerzo = models.IntegerField(verbose_name="Tad esfuerzo",null=True)
    mets = models.IntegerField(verbose_name="Mets",null=True)
    st = models.CharField(max_length=150)
    st_mm = models.CharField(verbose_name="St mm",max_length=50,null=True)
    ta_plana = models.CharField(max_length=150,default=False)
    motivo_suspencion=models.CharField(max_length=150)
    arritmia_sv=models.CharField(max_length=50)
    arritmia_v=models.CharField(max_length=50)
    sintomas=models.CharField(max_length=150)
    fcm_edad = models.IntegerField(verbose_name="Fcm edad",null=True)
    percent_fcmp = models.FloatField(verbose_name="Percent fcmp",null=True)
    itt = models.IntegerField(verbose_name="Itt",null=True)

class Meta: #aplicando un metodo para que pase a español en el admin del framework
        verbose_name= "Ergometria"#aca los paso al español en singular
        verbose_name_plural="Ergometrias"#aca los paso al español en prural
        ordering = ["created"] #con esta funcion puedo ordenar los objetos a medida que los creo