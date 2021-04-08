from django.shortcuts import render,redirect,reverse
from.forms import LenteForm
from.models import Lente
from django.views.generic import UpdateView,DeleteView
# Create your views here.

def principal(request):
    return render(request,'core/index.html')

def ListaLentes(request):
    lentes = Lente.objects.all()
    return render(request,'core/listaLente.html',{'lentes':lentes})

def cargaLentes(request):
    form = LenteForm()
    lentes = Lente.objects.all()
    if request.method=='POST':
        form = LenteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('carga')
        else:
            form = LenteForm
            return render("el formulario no se cargo correctamente")
    return render(request,'core/cargaLente.html',{'lentes':lentes,'form':form})

class EditaLente (UpdateView):
    model = Lente
    form = Lente
    fields=['modelo','cantidad']
    template_name='core/editalente.html'
    def get_success_url(self):
        return reverse('carga')

class BorraLente(DeleteView):
    model = Lente
    template_name='core/borralente.html'
    def get_success_url(self):
        return reverse('carga')