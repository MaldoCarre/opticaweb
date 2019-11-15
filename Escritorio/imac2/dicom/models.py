from django.db import models
from core.models import Estudio

# Create your models here.
class DicomImagenes (models.Model):
    estudio=models.OneToOneField(Estudio, on_delete=models.CASCADE)
    imagendicom=models.FileField(upload_to='media/')


