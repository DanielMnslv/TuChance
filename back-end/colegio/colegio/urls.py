from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('alumnos.urls')),  # Incluimos las URLs de la app alumnos
]
