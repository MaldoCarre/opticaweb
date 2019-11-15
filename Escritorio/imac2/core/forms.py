from django import forms
from.models import Estudio, Pacientes

#en esta parte se genera el back end de los formularios web 
#generando otra forma de cargar los datos desde la pagina web

class estudioFormu(forms.ModelForm):
    class Meta:
        model=Estudio # aca indicamos los campos que vamos a utilizar 

        fields= [
            'pacientes',         #se realizo cambio en el formulario con la relacion de la tabla paciente y estudio
            'instituciones',
            'medico',
            'peso',     
            'talla',
            'indicacion',
            'decubito',
            'perimetroAbdominal',
            'edad',
            'urgencia',
            'imc',
            'supCorporal',
            'calidadTecnica',
            'observaciones',
        ]
        labels = {
            'pacientes':'Pacientes',         #se realizo cambio en el formulario con la relacion de la tabla paciente y estudio
            'instituciones':'Instituciones',
            'medico':'Medico',
            'peso':'Peso',     
            'talla':'Talla',
            'indicacion':'Indicacion',
            'decubito':'Decubito',
            'perimetroAbdominal':'Perimetro abdominal',
            'edad':'Edad',
            'urgencia':'Urgencia',
            'imc':'Imc',
            'supCorporal':'Superficie corporal',
            'calidadTecnica':'Calidad tecnica',
            'observaciones':'Observaciones',
        }
        
        widgets={
            'pacientes':forms.Select(attrs={'class':'form-control'}),
            'instituciones':forms.Select(attrs={'class':'form-control'}),
            'medico':forms.TextInput(attrs={'class':'form-control'}),
            'peso':forms.TextInput(attrs={'class':'form-control'}),
            'talla':forms.TextInput(attrs={'class':'form-control'}),
            'indicacion':forms.TextInput(attrs={'class':'form-control'}),
            'decubito':forms.TextInput(attrs={'class':'form-control'}),
            'perimetroAbdominal':forms.TextInput(attrs={'class':'form-control'}),
            'edad':forms.TextInput(attrs={'class':'form-control'}),
            'urgencia':forms.CheckboxInput(attrs={'class':'form-control','style':'width:30px;'}),
            'imc':forms.TextInput(attrs={'class':'form-control'}),
            'supCorporal':forms.TextInput(attrs={'class':'form-control'}),
            'calidadTecnica':forms.TextInput(attrs={'class':'form-control'}),
            'observaciones':forms.TextInput(attrs={'class':'form-control'}),
        }

#crear Formulario de los pacientes.

class pacienteFormu(forms.ModelForm):
    class Meta:
        model=Pacientes

        fields=[
            'nombre',
            'apellido',
            'dni',
            'nacionalidad',
            'domicilio',
            'numero_domicilio',
            'cobertura_medica',
            'numero_afilido',
            'sexo',
            'fecha_nacimiento',

        ]

        labels={
            'nombre': 'Nombre',
            'apellido': 'Apellido',
            'dni':'Dni',
            'nacionalidad':'Nacionalidad',
            'domicilio':'Domicilio',
            'numero_domicilio':'Numero de domicilio',
            'cobertura_medica':'Cobertura medica',
            'numero_afilido':'Numero de afiliado',
            'sexo':'Sexo',
            'fecha_nacimiento':'Fecha de nacimiento',
        }

        widgets={
            'nombre':forms.TextInput(attrs={'class':'form-control'}),
            'apellido':forms.TextInput(attrs={'class':'form-control'}),
            'dni':forms.TextInput(attrs={'class':'form-control'}),
            'nacionalidad':forms.TextInput(attrs={'class':'form-control'}),
            'domicilio':forms.TextInput(attrs={'class':'form-control'}),
            'numero_domicilio':forms.TextInput(attrs={'class':'form-control'}),
            'cobertura_medica':forms.TextInput(attrs={'class':'form-control'}),
            'numero_afilido':forms.TextInput(attrs={'class':'form-control'}),
            'sexo':forms.TextInput(attrs={'class':'form-control'}),
            'fecha_nacimiento':forms.DateInput(attrs={'class':'form-control'}),
        }


