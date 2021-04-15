from django.shortcuts import render,redirect,reverse
from.forms import LenteForm,RecetaForm
from.models import Lente,Receta
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
            return render(request, "el formulario no se cargo correctamente")
    return render(request,'core/cargaLente.html',{'lentes':lentes,'form':form})

class EditaLente (UpdateView):
    model = Lente
    form = Lente
    fields = '__all__'
    template_name='core/editalente.html'
    def get_success_url(self):
        return reverse('carga')

class BorraLente(DeleteView):
    model = Lente
    template_name='core/borralente.html'
    def get_success_url(self):
        return reverse('carga')

################################# vistas recetas #####################################
def ListaReceta(request):
    receta = Receta.objects.all()
    return render(request,'core/listaReceta.html',{'receta':receta})

def cargaReceta(request):
    form = RecetaForm()
    if request.method=='POST':
        form = RecetaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('cargaReceta')
        else:
            form = LenteForm
            return render (request ,"el formulario no se cargo correctamente")
    return render(request,'core/cargaReceta.html',{'form':form})

class EditaReceta (UpdateView):
    model = Receta
    form = RecetaForm
    fields = '__all__'
    template_name='core/editareceta.html'
    def get_success_url(self):
        return reverse('cargaReceta')

class BorraReceta(DeleteView):
    model = Receta
    template_name='core/borraReceta.html'
    def get_success_url(self):
        return reverse('cargaReceta')

