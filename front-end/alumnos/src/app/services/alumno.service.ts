import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrlCrear = 'http://localhost:8000/crear-alumno/';
  private apiUrlConsultar = 'http://localhost:8000/consultar-alumno/';

  // Credenciales codificadas en Base64 (usuario:contraseña)
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('DanielJmnz:Cambio2580@')
    })
  };

  constructor(private http: HttpClient) {}

  crearAlumno(alumno: any): Observable<any> {
    return this.http.post(this.apiUrlCrear, alumno, this.httpOptions);
  }

  consultarAlumnosPorGrado(grado: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlConsultar}${grado}/`, this.httpOptions);
  }
}

