from django.shortcuts import render,reverse,redirect,get_object_or_404
from.forms import FormularioErgometria
from core.models import Pacientes,Estudio
from.models import Ergometria
from django.views.generic import ListView,UpdateView,DeleteView
# Create your views here.

def cargaErgo(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'ergo/ergometria.html', {'eventos': eventos})
    if request.method == 'POST':
        form=FormularioErgometria(request.POST) #indico metodos POST de la transmicion de mis datos
        if form.is_valid():
             #pregunto si mis datos son validos
            form.save(commit=True) #guardo
        return redirect('/prfusionmiocardica/')#al ser esto exitoso redirecciono a home
    else:
        form=FormularioErgometria()#caso contrario atualizo la misma pagina del forulario
        return render(request,'ergo/ergometria.html')#renerizo indicando que exitste formulario
    return render(request,"'ergo/ergometria.html",{'form':form})


def Lista_ergo(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Ergometria.objects.filter(paciente_ergo__dni__icontains=q)
        return render(request, 'ergo/listaergometria.html', {'eventos': eventos})

class Edita_ergo(UpdateView):
    model=Ergometria
    form_class=FormularioErgometria
    template_name='ergo/editaergo.html'
    def get_success_url(self):
        return reverse('listaergo')
class Borra_ergo(DeleteView):
    model=Ergometria
    template_name='ergo/borraergo.html'
    def get_success_url(self):
        return reverse('listaergo')

def edit(request, pk):
    post = get_object_or_404(Ergometria, pk=pk)
    form=FormularioErgometria(instance=post)
    if request.method == "POST":
        form = FormularioErgometria(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            
            arg2=int(post.estudio.id_estudio)
            return redirect('aplicativo',arg2)
        else:
            form = FormularioErgometria(instance=post)
    return render(request, "ergo/editaergo2.html", {'form': form})
