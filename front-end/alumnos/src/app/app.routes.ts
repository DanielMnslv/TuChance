import { Routes } from '@angular/router';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnoComponent } from './consultar-alumno/consultar-alumno.component';

export const routes: Routes = [
  { path: '', redirectTo: 'crear-alumno', pathMatch: 'full' },
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumno', component: ConsultarAlumnoComponent },
];
