from django.shortcuts import render
from core.models import Estudio,Pacientes
from antec.models import Antecedentes
from antec.forms import formAntecedentes
from fventricular.models import FuncionVentricular
from ergo.models import Ergometria
from mpi.models import Mpi


def aplicativo(request, pk):
    
    ante = Antecedentes.objects.filter(estudio__id_estudio__icontains=pk)
    estudio = Estudio.objects.filter(id_estudio__icontains=pk)
    ventri = FuncionVentricular.objects.filter(estudio__id_estudio__icontains=pk)
    ergo = Ergometria.objects.filter(estudio__id_estudio__icontains=pk)
    mpi = Mpi.objects.filter(estudio__id_estudio__icontains=pk)
    return render(request, "aplicativo/aplicativo.html",{'ante':ante, 'ventri':ventri, 'ergo':ergo, 'estudio':estudio, 'mpi':mpi})
# Create your views here.
def preinforme(request, pac_id):
    
    ante = Antecedentes.objects.filter(estudio__id_estudio__icontains=pac_id)
    estudio = Estudio.objects.filter(id_estudio__icontains=pac_id)
    ventri = FuncionVentricular.objects.filter(estudio__id_estudio__icontains=pac_id)
    ergo = Ergometria.objects.filter(estudio__id_estudio__icontains=pac_id)
    mpi = Mpi.objects.filter(estudio__id_estudio__icontains=pac_id)
    return render(request, "aplicativo/Vista.html" , {'ante':ante, 'ventri':ventri, 'ergo':ergo, 'estudio':estudio, 'mpi':mpi})
def listapacientes(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'aplicativo/pacientespreinforme.html', {'eventos': eventos})