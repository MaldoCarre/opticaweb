from django.shortcuts import render,redirect
from core.models import Lente,Receta
from.models import Venta_Lente,Venta_Receta
from.forms import Venta_Lente_Form
# Create your views here.

def lista_lentes_venta(request):
    lentes = Lente.objects.all()
    return render (request,'ventas/venta_lente.html',{'lentes':lentes})


def venta_Lente (request,pk):
    lente = Lente.objects.filter(id = pk)
    cantidad_L = 0
    for l in lente:
        cantidad_L = l.cantidad-1
    form = Venta_Lente_Form
    if request.method == 'POST':
        form = Venta_Lente_Form(request.POST)
        if form.is_valid():
            form.save()
            lente.update(cantidad=cantidad_L)
            return redirect('listaLentesVender')
    else :
        form = Venta_Lente_Form
    return render (request,'ventas/venta_lente.html',{'form':form,'lente':lente})


def ventas_lentes(request):
    total_lentes = 0
    ventas_L = Venta_Lente.objects.all()
    for v in ventas_L:
        total_lentes += v.lente.precio
    return render (request,'ventas/muestraventas.html',{'total_lentes':total_lentes,'ventas_L':ventas_L})