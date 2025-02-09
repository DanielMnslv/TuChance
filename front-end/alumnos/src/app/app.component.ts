import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Asegúrate de que también esté marcado como standalone
  imports: [RouterModule]  // Importar RouterModule para usar router-outlet
})
export class AppComponent {
  title = 'alumnos';
}
