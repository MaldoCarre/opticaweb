from django.shortcuts import render,get_object_or_404,reverse, HttpResponse, redirect
from.forms import estudioFormu,pacienteFormu
from.models import Pacientes,Estudio
from django.views.generic import ListView,UpdateView,DeleteView
from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
# Create your views here
#en esta parte se generan las vistas para direccionar nuestra app 

def fomPaciente(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Pacientes.objects.filter(dni__icontains=q)
        return render(request, 'core/formPaciente.html', {'eventos': eventos})
    
    if request.method == 'POST':
        form=estudioFormu(request.POST) #indico metodos POST de la transmicion de mis datos
        if form.is_valid(): #pregunto si mis datos son validos
            form.save() #guardo
        return redirect('/antecedente/')#al ser esto exitoso redirecciono a home
    else:
        form=estudioFormu()#caso contrario atualizo la misma pagina del forulario
    
    return render(request,"core/formPaciente.html",{'form':form}) #renerizo indicando que exitste formulario
        

def Listaestudios(request,**args):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Estudio.objects.filter(pacientes__dni__icontains=q)
        return render(request, 'core/listaestudios.html', {'eventos': eventos})


class Editaestudio(UpdateView):
    model=Estudio
    form_class = estudioFormu
    template_name= 'core/editaestudio.html'
    def get_success_url(self):
        return reverse('estudioslistado')
class Borrarestudio(DeleteView):
    model=Estudio
    template_name='core/borraestudio.html'
    def get_success_url(self):
        return reverse('estudioslistado')

def edit(request, pk):
    post = get_object_or_404(Estudio, pk=pk)
    form = estudioFormu(instance=post)
    if request.method == "POST":
        form = estudioFormu(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            
            arg2=int(post.id_estudio)
            return redirect('aplicativo',arg2)
        else:
            form = estudioFormu(instance=post)
    return render(request, "core/editaestudio2.html", {'form': form})



#################################################### aca se termina C R U D de los estudios ##########################################
#funcion pagina home Home.
def home(request):
    return render(request,"core/home.html",context=None) #funcion de la vista home 

#carga del formulario de los pacientes.
###################################################### comienza C R U D de los pacientes asociados. ##########################################
def cargaPacientes(request):
    if request.method == 'POST':
        form=pacienteFormu(request.POST)
        if form.is_valid():
            form.save(commit=True)
        return redirect('/formpaciente/')
    else:
        form=pacienteFormu
    return render (request,"core/cargapaciente.html",{'form':form})

def lista_pacientes(request):
    if request.method == 'GET':
        q = request.GET.get('q', '')
        eventos = Pacientes.objects.filter(dni__icontains=q)
        return render(request, 'core/listapacientes.html', {'eventos': eventos})

class Editarpaciente(UpdateView):
    model=Pacientes
    form_class = pacienteFormu
    template_name= 'core/editapaciente.html'
    def get_success_url(self):
        return reverse('pacienteslistado')
class Editarpaciente(UpdateView):
    model=Pacientes
    form_class = pacienteFormu
    template_name= 'core/editapaciente.html'
    def get_success_url(self):
        return reverse('pacienteslistado')
class Borrar(DeleteView):
    model=Pacientes
    template_name='core/borrarpaciente.html'
    def get_success_url(self):
        return reverse('pacienteslistado')

    
class Editarpaciente(UpdateView):
    model=Pacientes
    form_class = pacienteFormu
    template_name= 'core/editapaciente.html'
    def get_success_url(self):
        return reverse('pacienteslistado')
class Borrar(DeleteView):
    model=Pacientes
    template_name='core/borrarpaciente.html'
    def get_success_url(self):
        return reverse('pacienteslistado')
    

#def edit(request, pk):
 #   post = get_object_or_404(Pacientes, pk=pk)
  #  form = pacienteFormu(instance=post)
   # if request.method == "POST":
    #    form = pacienteFormu(request.POST, instance=post)
     #   if form.is_valid():
      #      post = form.save(commit=False)
       #     post.save()
        #    arg1=int(post.pacientes.id_pac)
         #   arg2=int(post.id_estudio)
          #  return redirect('aplicativo',arg1,arg2)
        #else:
         #   form = pacienteFormu(instance=post)
    #return render(request, "core/editaestudio2.html", {'form': form})



    






