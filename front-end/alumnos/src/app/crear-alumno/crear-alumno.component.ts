import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms';    // Importar FormsModule
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Añadir módulos necesarios
})
export class CrearAlumnoComponent {
  alumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombre_padre: '',
    nombre_madre: '',
    grado: null,
    seccion: '',
    fecha_ingreso: ''
  };

  mensaje: string = '';

  constructor(private alumnoService: AlumnoService) {}

  onSubmit() {
    this.alumnoService.crearAlumno(this.alumno).subscribe({
      next: (res) => {
        this.mensaje = '¡Alumno registrado exitosamente!';
        this.alumno = {
          nombre: '',
          fecha_nacimiento: '',
          nombre_padre: '',
          nombre_madre: '',
          grado: null,
          seccion: '',
          fecha_ingreso: ''
        };
      },
      error: (err) => {
        console.error('Error al registrar alumno:', err);
      }
    });
  }
}
