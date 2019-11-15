from django.urls import path
from mpi.views import formpi,Lista_mpi,Edita_mpi,Borra_mpi,edit
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path del core
    path('prfusionmiocardica/',formpi, name="mpi"),
    path('listampi/',Lista_mpi, name="listampi"),#listar
    path('editampi/<int:pk>/', Edita_mpi.as_view(), name="editampi"),#editar
    path('editampi2/<int:pk>/', edit, name="editampi2"),#editar
    path('borrampi/<int:pk>/', Borra_mpi.as_view(), name="borrampi"),#eliminar CRUD
    
    
]