from django.urls import path
from django.contrib.auth.views import LoginView 
from django.contrib.auth import views as auth_views
from core.views import lista_pacientes,home,fomPaciente,cargaPacientes,Editarpaciente,Borrar,Listaestudios,Editaestudio,Borrarestudio,edit
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path del core
    path('principal/', home, name="home"),
    path('formpaciente/', fomPaciente, name="form"),
    path('cargapaciente/', cargaPacientes, name="pacienteform"),
    path('editarpaciente/<int:pk>/', Editarpaciente.as_view(), name="editapac"),
    path('borrarpacientes/<int:pk>/', Borrar.as_view(), name="borrarpac"),    
    path('listapacientes/', lista_pacientes, name="pacienteslistado"),
    path('listaestudios/', Listaestudios, name='estudioslistado'),
    path('editaestudio/<int:pk>/', Editaestudio.as_view(), name="editaestudio"),
    path('editaestudio2/<int:pk>/', edit, name="editaestudio2"),
    path('borrarestudio/<int:pk>/', Borrarestudio.as_view(), name="borrarestudios"),
    path('', auth_views.LoginView.as_view(template_name='core/Login.html'), name='login'),
]