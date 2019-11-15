from django.shortcuts import render, redirect, reverse
from.forms import FormDicom
from.models import DicomImagenes
from core.models import Estudio
from django.views.generic import UpdateView,DeleteView
# Create your views here.
def cargadicom(request):

    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'dicom/carga.html', {'eventos': eventos})

    if request.method=='POST':
        form = FormDicom(request.POST, request.FILES)
        if form.is_valid:
            form.save()
            return redirect('dicomlist')
    else:
        form = FormDicom()
    return render(request,'dicom/carga.html',{'form':form})
    
def listadicom(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        dicom = DicomImagenes.objects.filter(estudio__pacientes__dni__icontains=q)
        return render(request,'dicom/listadicom.html', {'dicom':dicom})

class editaDicom (UpdateView):
    model = DicomImagenes
    form_class = FormDicom
    template_name = 'dicom/updatedicom.html'
    def get_success_url(self):
        return reverse('dicomlist')

class borraDicom (DeleteView):
    model = DicomImagenes
    template_name = 'dicom/borradicom.html'
    def get_success_url(self):
        return reverse('dicomlist')


