from django.urls import path
from fventricular.views import formventricular,Lista_ventricular,Edita_ventricular,Borra_ventricular,edit
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path del core
    path('funcionventricular/', formventricular, name="ventricular"),
    path('listaventricular/',Lista_ventricular, name="listaventricular"),#listar
    path('editaventricular/<int:pk>/', Edita_ventricular.as_view(), name="editaventricular"),#editar
   path('edit/<int:pk>', edit,name="editafv"),
    path('borraventricular/<int:pk>/', Borra_ventricular.as_view(), name="borraventricular"),#eliminar CRUD
    
    
]