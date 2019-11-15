from django.urls import path
from ergo.views import cargaErgo,Lista_ergo,Edita_ergo,Borra_ergo,edit
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path del core
    path('ergometria/',cargaErgo, name="ergo"),#cargar
    path('listaergometrias/',Lista_ergo, name="listaergo"),#listar
    path('editaergo/<int:pk>/', Edita_ergo.as_view(), name="editaergo"),#editar
    path('editaergo2/<int:pk>/', edit, name="editaergo2"),#editar
    path('borraergo/<int:pk>/', Borra_ergo.as_view(), name="borraergo"),#eliminar CRUD
]