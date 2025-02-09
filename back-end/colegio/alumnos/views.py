from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import Alumno
from .serializers import AlumnoSerializer

class CrearAlumnoView(generics.CreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
    permission_classes = [IsAuthenticated]  # Requiere autenticación básica

class ConsultarAlumnoView(generics.ListAPIView):
    serializer_class = AlumnoSerializer
    permission_classes = [IsAuthenticated]  # Requiere autenticación básica

    def get_queryset(self):
        grado = self.kwargs.get('grado')
        return Alumno.objects.filter(grado=grado)
