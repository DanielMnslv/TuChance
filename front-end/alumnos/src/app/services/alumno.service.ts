import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8000'; // Asegúrate de que coincide con tu backend

  constructor(private http: HttpClient) {}

  crearAlumno(alumnoData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-alumno/`, alumnoData);
  }

  consultarAlumnosPorGrado(grado: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultar-alumno/${grado}/`);
  }
}
