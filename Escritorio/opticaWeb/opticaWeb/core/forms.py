from django import forms
from.models import Lente,Receta

##### choices #####

distancia = (
    ("Monofocal","Monofocal"),
    ("Multifocal","Multifocal"),
    ("Multifocal/progresivo Sedna","Multifocal/progresivo Sedna"),
    ("Multifocal/progresivo Vitfull","Multifocal/progresivo Vitfull"),
    ("Multifocal/progresivo Explorer","Multifocal/progresivo Explorer"),
    ("Multifocal/progresivo Varilux","Multifocal/progresivo Varilux"),
    ("Ocupacional Intervew","Ocupacional Intervew"),
    ("Ocupacional Sedna Leader","Ocupacional Sedna Leader"),
    ("Ocupacional Sedna Office","Ocupacional Sedna Office"),
    ("Bifocal Invisible Amplitude","Bifocal Invisible Amplitude"),
    ("Bifocal Flap-Top Amplitude","Bifocal Flap-Top Amplitude"),
    ("Bifocal Different","Bifocal Different"),
    ("Bifocal Flap-Top Convencional","Bifocal Flap-Top Convencional"),
)

material = (
    ("Orgánico Común","Orgánico Común"),
    ("Photo Lite Organico","Photo Lite Organico"),
    ("Mineral Blanco","Mineral Blanco"),
    ("Mineral Fotocromático","Mineral Fotocromático"),
    ("Mineral Flinlite","Mineral Flinlite"),
    ("Orgánico Control Blue","Orgánico Control Blue"),
    ("Orgánico Con Ar De Stock","Orgánico Con Ar De Stock"),
    ("Policarbonato Blanco","Policarbonato Blanco"),
    ("Polylite","Polylite"),
    ("Amplitude HD Stock","Amplitude HD Stock"),
    ("Amplitude Rango Extendido","Amplitude Rango Extendido"),
)

color = (
    ("Blanco","Blanco"),
    ("Fotocomatico","Fotocromatico"),
    ("Teñidos","Teñidos"),
)

class LenteForm(forms.ModelForm):
    
    class Meta:
         model = Lente
         fields = ("__all__")
         wiggets={
             'barcode':forms.TextInput(attrs={'class':'form-control' ,'id':'barcode'}),
             'marca':forms.TextInput(attrs={'class':'form-control' ,'id':'marca'}),
             'modelo':forms.TextInput(attrs={'class':'form-control' ,'id':'modelo'}),
             'descriopcion':forms.Textarea(attrs={'class':'form-control','id':'descripcion'}),
             'cantidad':forms.TextInput(attrs={'class':'form-control' ,'id':'cantidad'}),
             'precio':forms.TextInput(attrs={'class':'form-control' ,'id':'precio'}),
         }

##################### From receta #####################

class RecetaForm (forms.ModelForm):

    class Meta: 
        model = Receta
        fields = ('__all__')
        widgets = {
            'nombre' :forms.TextInput(attrs={'class':'form-control' ,'id':'nombre'}),
            'localidad' :forms.TextInput(attrs={'class':'form-control' ,'id':'localidad'}),
            'telefono' :forms.TextInput(attrs={'class':'form-control' ,'id':'telefono'}),
            'numero_receta' :forms.TextInput(attrs={'class':'form-control' ,'id':'numero_receta'}),
            #fecha :forms.TextInput(attrs={'class':'form-control' ,'id':'barcode'}),
            'd_esf' :forms.TextInput(attrs={'class':'form-control' ,'id':'d_esf'}),
            'd_cil' :forms.TextInput(attrs={'class':'form-control' ,'id':'d_cil'}),
            'd_eje' :forms.TextInput(attrs={'class':'form-control' ,'id':'d_eje'}),
            'd_alt' :forms.TextInput(attrs={'class':'form-control' ,'id':'d_alt'}),
            'd_d_int' :forms.TextInput(attrs={'class':'form-control' ,'id':'d_d_int'}),
            'i_esf' :forms.TextInput(attrs={'class':'form-control' ,'id':'i_esf'}),
            'i_cil' :forms.TextInput(attrs={'class':'form-control' ,'id':'i_cil'}),
            'i_eje' :forms.TextInput(attrs={'class':'form-control' ,'id':'i_eje'}),
            'i_alt' :forms.TextInput(attrs={'class':'form-control' ,'id':'i_alt'}),
            'i_d_int' :forms.TextInput(attrs={'class':'form-control' ,'id':'i_d_int'}),
            'calibrado' :forms.TextInput(attrs={'class':'form-control' ,'id':'calibrado'}),
            'armazon' :forms.TextInput(attrs={'class':'form-control' ,'id':'armazon'}),
            'tam_pel' :forms.TextInput(attrs={'class':'form-control' ,'id':'tam_pel'}),
            'alt_OD' :forms.TextInput(attrs={'class':'form-control' ,'id':'alt_OD'}),
            'distancia':forms.Select(attrs={'class':'form-control' ,'id':'tipoProducto',},choices=distancia),
            'material_de_cristal' :forms.Select(attrs={'class':'form-control' ,'id':'material_de_cristal',},choices=material),
            'color_cristal' :forms.Select(attrs={'class':'form-control' ,'id':'color_cristal',},choices=color),
            'observacion' :forms.Textarea(attrs={'class':'form-control','id':'observacion'}),
            'total' :forms.TextInput(attrs={'class':'form-control' ,'id':'total'}),
        }