from django.shortcuts import render,redirect
from core.models import Lente,Receta
from.models import Venta_Lente,Venta_Receta
from.forms import Venta_Lente_Form
# Create your views here.

def lista_lentes_venta(request):
    lentes = Lente.objects.all()
    return render (request,'ventas/lista_lente_ventas.html',{'lentes':lentes})


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
    ventas_L = Venta_Lente.objects.all()
    ventas_R = Venta_Receta.objects.all()
    total_lentes = 0
    for v in ventas_L:
        total_lentes = v.lente.precio
    total_recetas = 0
    for r in ventas_R:
        total_recetas = r.receta.total
    total = total_lentes + total_recetas
    return render (request,'ventas/muestraventas.html',{'recetas':ventas_R,'lentes':ventas_L,'total':total})