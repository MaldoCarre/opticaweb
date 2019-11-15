from django.db import models

# Create your models here.


class Pacientes (models.Model):
    id_pac=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=50,verbose_name="Nombre")
    apellido=models.CharField(max_length=50,verbose_name="Apellido")
    dni=models.IntegerField(verbose_name="Dni")
    nacionalidad=models.CharField(max_length=50,verbose_name="Nacionalidad")
    domicilio=models.CharField(max_length=50,verbose_name="Domicilio")
    numero_domicilio=models.IntegerField(verbose_name="N° domicilio")
    cobertura_medica=models.CharField(max_length=50,verbose_name="Cobertura Medica")
    numero_afilido=models.IntegerField(verbose_name="N° afiliado")
    sexo=models.CharField(max_length=20,verbose_name="Sexo")
    fecha_nacimiento= models.DateField(verbose_name="Fecha de nacimiento")
    def __str__(self):
        return '%s %s' % (self.nombre, self.apellido)

class Meta: #aplicando un metodo para que pase a español en el admin del framework
        verbose_name= "paciente"#aca los paso al español en singular
        verbose_name_plural="paciente"#aca los paso al español en prural
        ordering = ["created"] #con esta funcion puedo ordenar los objetos a medida que los c
        def __str__(self):
            return '%s %s' % (self.nombre, self.apellido)

class InstitucionMedica (models.Model):
    nombreInstitucion=models.CharField(max_length=60,verbose_name="Nombre de institucion")
    calle=models.CharField(max_length=60,verbose_name="Calle")
    barrio=models.CharField(max_length=60,verbose_name="Barrio")
    numeracion=models.IntegerField(verbose_name="Numeracion")
    pais=models.CharField(max_length=60,verbose_name="Pais")
    ciudad=models.CharField(max_length=60,verbose_name="Ciudad")
    provinciaEstado=models.CharField(max_length=60,verbose_name="Provincia")
    codPostal=models.IntegerField(verbose_name="Codigo postal")
    servicioRx=models.BooleanField(verbose_name="Servicio RX",default=False)
    servicioFluoro=models.BooleanField(verbose_name="Servicio Fluoro",default=False)
    servicioArococ=models.BooleanField(verbose_name="Servicio ArocoC",default=False)


class Meta: #aplicando un metodo para que pase a español en el admin del framework
        verbose_name= "Institucion medica"#aca los paso al español en singular
        verbose_name_plural="Instituciones medicas"#aca los paso al español en prural
        ordering = ["created"] #con esta funcion puedo ordenar los objetos a medida que los creo


class Estudio (models.Model):
    id_estudio=models.AutoField(primary_key=True,verbose_name="Estudio")
    pacientes=models.ForeignKey(Pacientes,null=True,on_delete=models.CASCADE)#relacion uno a muchos con la tabla de pacientes.
    instituciones=models.ForeignKey(InstitucionMedica,null=True,on_delete=models.CASCADE) #relacion uno a muchos con la tabla de las instituciones medicas
    fechaAcutal=models.DateTimeField(auto_now_add=True,verbose_name="Fecha Actual")
    medico=models.CharField(max_length=50,verbose_name="Medico")
    peso=models.FloatField(verbose_name="Peso")
    talla=models.FloatField(verbose_name="Talla")
    indicacion=models.CharField(max_length=250,verbose_name="Indicacion")
    decubito=models.CharField(max_length=50,verbose_name="Decubito")
    perimetroAbdominal=models.IntegerField(verbose_name="Perimetro Abdominal")
    urgencia=models.BooleanField(verbose_name="Urgente",default=False)
    edad=models.IntegerField(verbose_name="Edad")
    imc=models.FloatField(verbose_name="Imc")
    supCorporal=models.FloatField(verbose_name="Superficie corporal")
    calidadTecnica=models.IntegerField(verbose_name="Calidad tecnica")
    observaciones=models.TextField(verbose_name="Observaciones")

class Meta: #aplicando un metodo para que pase a español en el admin del framework
        verbose_name= "estudio"#aca los paso al español en singular
        verbose_name_plural="estudios"#aca los paso al español en prural
        ordering = ["created"] #con esta funcion puedo ordenar los objetos a m