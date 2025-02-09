import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms';    // Importar FormsModule
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-consultar-alumno',
  templateUrl: './consultar-alumno.component.html',
  styleUrls: ['./consultar-alumno.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Añadir módulos necesarios
})
export class ConsultarAlumnoComponent {
  grado: number | null = null;
  alumnos: any[] = [];
  consultaRealizada: boolean = false;

  constructor(private alumnoService: AlumnoService) {}

  consultarAlumnos() {
    if (this.grado !== null) {
      this.alumnoService.consultarAlumnosPorGrado(this.grado).subscribe({
        next: (res) => {
          this.alumnos = res;
          this.consultaRealizada = true;
        },
        error: (err) => {
          console.error('Error al consultar alumnos:', err);
        }
      });
    }
  }
}
