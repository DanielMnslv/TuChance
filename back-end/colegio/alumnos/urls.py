from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.CrearAlumnoView.as_view(), name='crear-alumno'),  # Agregada barra final
    path('consultar-alumno/<int:grado>/', views.ConsultarAlumnoView.as_view(), name='consultar-alumno'),  # Agregada barra final
]
