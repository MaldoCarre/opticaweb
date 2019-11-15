from django import forms
from.models import DicomImagenes
class FormDicom (forms.ModelForm):
    class Meta:
        model = DicomImagenes
        fields = ('estudio','imagendicom')

        labels = {
            'estudio':'Estudio',
            'imagendicom':'Archivo Dicom'
        }

        widgets = {
            'estudio':forms.Select(attrs={'class':'form-control'}),
            'imagendicom':forms.FileInput(attrs={'class':'form-control'}),
        }
