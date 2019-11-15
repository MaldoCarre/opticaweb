from django.db import models
from core.models import Pacientes,Estudio
# Create your models here.

class FuncionVentricular (models.Model):
    id_func_vent = models.AutoField(primary_key=True)
    estudio=models.OneToOneField(Estudio,null=True,on_delete=models.CASCADE)
    paciente_fv = models.ForeignKey(Pacientes,null=True,on_delete=models.CASCADE)
    vol_relat_rest = models.IntegerField(verbose_name="vol relat rest",null=True)
    vfdvi_rest = models.IntegerField(verbose_name="vfdvi rest",null=True)
    fvsvi_rest = models.IntegerField(verbose_name="fvsvi rest",null=True)
    vfdvi_m2_rest = models.IntegerField(verbose_name="vfdvi m2 rest",null=True)
    fvsvi_m2_rest = models.IntegerField(verbose_name="fvsvi m2 rest",null=True)
    frac_eyeccion_rest = models.IntegerField (verbose_name="frac eyeccion rest",null=True)   
    vol_relat_stress = models.IntegerField(verbose_name="vol relat stress",null=True)
    vfdvi_stress = models.IntegerField(verbose_name="vfdvi stress",null=True)
    fvsvi_stress = models.IntegerField(verbose_name="fvsvi stress",null=True)
    vfdvi_m2_stress = models.IntegerField(verbose_name="vfdvi m2 stress",null=True)
    fvsvi_m2_stress = models.IntegerField(verbose_name="fvsvi m2 stress",null=True)
    frac_eyeccion_stress = models.IntegerField(verbose_name="frac eyeccion stress",null=True)
    tid = models.FloatField(verbose_name="Tid",null=True)

