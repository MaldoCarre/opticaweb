from django import forms
from.models import Lente
class LenteForm(forms.ModelForm):
    
    class Meta:
         model = Lente
         fields = ("__all__")
         wiggets={
             'modelo':forms.TextInput(attrs={'class':'form-control' ,'id':'codigo'}),
             'cantidad':forms.TextInput(attrs={'class':'form-control' ,'id':'codigo'}),
         }
