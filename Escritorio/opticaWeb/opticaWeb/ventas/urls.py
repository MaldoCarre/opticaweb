from django.urls import path
from.views import lista_lentes_venta,venta_Lente,ventas_lentes_vendidos
urlpatterns = [
    path('listaventalente/',lista_lentes_venta,name='listaLentesVender'),
    path('ventalente/<int:pk>/',venta_Lente,name='ventalente'),
    path('verventas/',ventas_lentes_vendidos,name='ventas'),
]
