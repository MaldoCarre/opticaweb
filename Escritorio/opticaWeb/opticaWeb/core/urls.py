from django.urls import path
from.views import principal,ListaLentes,cargaLentes,EditaLente,BorraLente,ListaReceta,cargaReceta,EditaReceta,BorraReceta
urlpatterns = [
    path("home",principal,name="home"),
    path("lista",ListaLentes,name="lista"), 
    path("carga", cargaLentes, name="carga"),
    path("edita/<int:pk>/",EditaLente.as_view(),name="edita"),
    path("borra/<int:pk>/",BorraLente.as_view(),name="borra"),
    path("listareceta",ListaReceta,name="listaReseta"), 
    path("cargareceta", cargaReceta, name="cargaReceta"),
    path("editareceta/<int:pk>/",EditaReceta.as_view(),name="editaReceta"),
    path("borrareceta/<int:pk>/",BorraReceta.as_view(),name="borraReceta")
]
