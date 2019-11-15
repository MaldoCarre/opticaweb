from django.urls import path
from.import views
#aca genero las urls que va a tener la app core de nuestro proyecto 
urlpatterns = [

    #path de aplicativo
    path('aplicativo/<int:pk>/', views.aplicativo, name="aplicativo"),
   # path('aplicativo/<int:paciente_id>/', views.aplicativo, name="aplicativo"),
    path('preinforme/<int:pac_id>/', views.preinforme, name="preinforme"),
    path('pacientespreinforme/', views.listapacientes, name="pacientespreinforme"),
    
]