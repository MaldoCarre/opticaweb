"""imac2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from core import views
from antec import views
from ergo import views
from mpi  import views
from usuarios import views
from fventricular import views
from aplicativo import views
from dicom import views



urlpatterns = [
    path('', include('core.urls')),
    path('', include('antec.urls')),
    path('', include('ergo.urls')),
    path('', include('mpi.urls')),
    path('', include('usuarios.urls')),
    path('', include('fventricular.urls')),
    path('', include('aplicativo.urls')),
    path('', include('dicom.urls')),
    path('admin/', admin.site.urls),
]
