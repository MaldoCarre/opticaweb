from django.urls import path
from antec.views import form_antecedente,Lista_antecedentes,Edita_antecedentes,Borra_antecedente,edit
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path del core
    path('antecedente/',form_antecedente, name="antecedentes"),
    path('listaantecedente/',Lista_antecedentes, name="listaantecedentes"),
    path('editaantecedente/<int:pk>/', Edita_antecedentes.as_view(), name="editaantec"),
    path('editaantec/<int:pk>/', edit, name="editaantec2"),
    path('borrarantecedente/<int:pk>/', Borra_antecedente.as_view(), name="borraantec"),
    #path('busqueda/', views.busqueda, name="busquedas"),
    
    
]