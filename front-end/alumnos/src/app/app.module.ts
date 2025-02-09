import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnoComponent } from './consultar-alumno/consultar-alumno.component';

const routes: Routes = [
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumno', component: ConsultarAlumnoComponent },
  { path: '', redirectTo: '/crear-alumno', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CrearAlumnoComponent,  // Importa el componente standalone
    ConsultarAlumnoComponent  // Importa el componente standalone
  ],
  providers: [],
  bootstrap: [AppComponent]  // El AppComponent también debería estar configurado como standalone si da error
})
export class AppModule { }
