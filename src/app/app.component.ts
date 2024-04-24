import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,InfoComponent, InmuebleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22Ej1';
  Info: any;
}
