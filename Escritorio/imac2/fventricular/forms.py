from django import forms
from.models import FuncionVentricular

class ventricularFormu(forms.ModelForm):
    class Meta:
        model=FuncionVentricular # aca indicamos los campos que vamos a utilizar 
        fields= [

            'paciente_fv', 
            'estudio',
            'vol_relat_rest', 
            'vfdvi_rest', 
            'fvsvi_rest', 
            'vfdvi_m2_rest', 
            'fvsvi_m2_rest', 
            'frac_eyeccion_rest',  
            'vol_relat_stress', 
            'vfdvi_stress',
            'fvsvi_stress',
            'vfdvi_m2_stress',
            'fvsvi_m2_stress',
            'frac_eyeccion_stress',
            'tid',
        ]

        labels = {
            'paciente_fv':'Paciente', 
            'estudio':'estudio',
            'vol_relat_rest':'vol relat rest', 
            'vfdvi_rest':'vfdvi rest', 
            'fvsvi_rest':'fvsvi_rest', 
            'vfdvi_m2_rest':'vfdvi_m2_rest', 
            'fvsvi_m2_rest':'fvsvi_m2_rest', 
            'frac_eyeccion_rest':'frac_eyeccion_rest',  
            'vol_relat_stress':'vol_relat_stress', 
            'vfdvi_stress':'vfdvi_stress',
            'fvsvi_stress':'fvsvi_stress',
            'vfdvi_m2_stress':'vfdvi_m2_stress',
            'fvsvi_m2_stress':'fvsvi_m2_stress',
            'frac_eyeccion_stress':'frac_eyeccion_stress',
            'tid':'tid',
        }

        widgets = {
            'paciente_fv':forms.Select(attrs={'class':'form-control' ,'style':'height:40px ; display:none;' , 'id':'id_pac_ventricular'}), 
            'estudio':forms.Select(attrs={'class':'form-control' ,'style':'height:40px; display:none;'}),
            'vol_relat_rest':forms.TextInput(attrs={'class':'form-control'}), 
            'vfdvi_rest':forms.TextInput(attrs={'class':'form-control'}), 
            'fvsvi_rest':forms.TextInput(attrs={'class':'form-control'}), 
            'vfdvi_m2_rest':forms.TextInput(attrs={'class':'form-control'}), 
            'fvsvi_m2_rest':forms.TextInput(attrs={'class':'form-control'}), 
            'frac_eyeccion_rest':forms.TextInput(attrs={'class':'form-control'}),  
            'vol_relat_stress':forms.TextInput(attrs={'class':'form-control'}), 
            'vfdvi_stress':forms.TextInput(attrs={'class':'form-control'}),
            'fvsvi_stress':forms.TextInput(attrs={'class':'form-control'}),
            'vfdvi_m2_stress':forms.TextInput(attrs={'class':'form-control'}),
            'fvsvi_m2_stress':forms.TextInput(attrs={'class':'form-control'}),
            'frac_eyeccion_stress':forms.TextInput(attrs={'class':'form-control'}),
            'tid':forms.TextInput(attrs={'class':'form-control'}),
        }