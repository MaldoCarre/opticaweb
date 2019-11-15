from django.shortcuts import render,reverse, redirect, get_object_or_404
from.forms import formAntecedentes
from django.db.models import Q
from core.models import Estudio
from.models import Antecedentes
from django.views.generic import ListView,UpdateView,DeleteView
# Create your views here.
def form_antecedente(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'antec/antecedentes.html', {'eventos': eventos})
    if request.method == 'POST':
        form=formAntecedentes(request.POST) #indico metodos POST de la transmicion de mis datos
        if form.is_valid():
             #pregunto si mis datos son validos
            form.save(commit=True) #guardo
        return redirect('/ergometria/')#al ser esto exitoso redirecciono a home
    else:
        form=formAntecedentes#caso contrario atualizo la misma pagina del forulario
        return render(request,'antec/antecedentes.html')#renerizo indicando que exitste formulario
    return render(request,"antec/antecedentes.html",{'form':form})

def Lista_antecedentes(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Antecedentes.objects.filter(paciente_antecedente__dni__icontains=q)
        return render(request, 'antec/listaantecedentes.html', {'eventos': eventos})

class Edita_antecedentes(UpdateView):
    model=Antecedentes
    form_class=formAntecedentes
    template_name='antec/editaantecedentes.html'
    def get_success_url(self):
        return reverse('listaantecedentes')

class Borra_antecedente(DeleteView):
    model=Antecedentes
    template_name='antec/borraantecedentes.html'
    def get_success_url(self):
        return reverse('listaantecedentes')

def edit(request, pk):
    post = get_object_or_404(Antecedentes, pk=pk)
    form=formAntecedentes(instance=post)
    if request.method == "POST":
        form = formAntecedentes(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            
            arg2=int(post.estudio.id_estudio)
            return redirect('aplicativo',arg2)
        else:
            form = formAntecedentes(instance=post)
    return render(request, "antec/editaantecedentes2.html", {'form': form})
