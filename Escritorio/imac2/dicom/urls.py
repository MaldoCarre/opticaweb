from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from.views import cargadicom, listadicom , editaDicom, borraDicom
urlpatterns = [
    path('cargadicom/', cargadicom ,name="upload"),
    path('listadicom/', listadicom ,name="dicomlist"),
    path('editadicom/<int:pk>/', editaDicom.as_view(), name="editadicom"),
    path('borradicom/<int:pk>/', borraDicom.as_view(), name="borradicom"),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)