from django import forms
from. models import Venta_Receta,Venta_Lente

class Venta_Lente_Form (forms.ModelForm):
    class Meta:
        model = Venta_Lente
        fields = '__all__'