from django.urls import path
from.views import principal,ListaLentes,cargaLentes,EditaLente,BorraLente
urlpatterns = [
    path("home",principal,name="home"),
    path("lista",ListaLentes,name="lista"), 
    path("carga", cargaLentes, name="carga"),
    path("edita/<int:pk>/",EditaLente.as_view(),name="edita"),
    path("borra/<int:pk>/",BorraLente.as_view(),name="borra")
]
