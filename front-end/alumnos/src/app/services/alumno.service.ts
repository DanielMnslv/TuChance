import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrlCrear = 'http://localhost:8000/crear-alumno/';
  private apiUrlConsultar = 'http://localhost:8000/consultar-alumno/';

  constructor(private http: HttpClient) {}

  crearAlumno(alumno: any): Observable<any> {
    return this.http.post(this.apiUrlCrear, alumno);
  }

  consultarAlumnosPorGrado(grado: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlConsultar}${grado}/`);
  }
}
