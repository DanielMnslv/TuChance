from rest_framework import generics
from .models import Alumno
from .serializers import AlumnoSerializer

# Vista para crear un alumno
class CrearAlumnoView(generics.CreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

# Vista para consultar alumnos por grado
class ConsultarAlumnoView(generics.ListAPIView):
    serializer_class = AlumnoSerializer

    def get_queryset(self):
        grado = self.kwargs.get('grado')
        return Alumno.objects.filter(grado=grado)
