from django.shortcuts import render,reverse, redirect, get_object_or_404
from .forms import formMpi
from core.models import Pacientes,Estudio
from.models import Mpi
from django.views.generic import ListView,UpdateView,DeleteView

def formpi(request):
    
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'mpi/imagens.html', {'eventos': eventos})



    if request.method == 'POST':
        form=formMpi(request.POST,request.FILES) #indico metodos POST de la transmicion de mis datos
                                    #se agrega reques.FILES para indicarle que el metodos post va con un archivoS
        if form.is_valid(): #pregunto si mis datos son validos
            form.save() #guardo
        return redirect('/funcionventricular/')#al ser esto exitoso redirecciono a home
    else:
        form=formMpi()#caso contrario atualizo la misma pagina del forulario
    return render(request,"mpi/imagens.html",{'form':form})

def Lista_mpi(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Mpi.objects.filter(paciente_mpi__dni__icontains=q)
        return render(request, 'mpi/listampi.html', {'eventos': eventos})

class Edita_mpi(UpdateView):
    model=Mpi
    form_class=formMpi
    template_name='mpi/editampi.html'
    def get_success_url(self):
        return reverse('listampi')
class Borra_mpi(DeleteView):
    model=Mpi
    template_name='mpi/borrampi.html'
    def get_success_url(self):
        return reverse('listampi')
        
def edit(request, pk):
    post = get_object_or_404(Mpi, pk=pk)
    form=formMpi(instance=post)
    if request.method == "POST":
        form = formMpi(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            
            arg2=int(post.estudio.id_estudio)
            return redirect('aplicativo',arg2)
        else:
            form = formMpi(instance=post)
    return render(request, "mpi/editampi2.html", {'form': form})


