import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Inmueble } from '../inmueble/inmueble.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
 
  ngOnInit(): void {
    console.log(`id recibido ${this.id}`);
    console.log(`descripcion recibida ${this.nombre}`);
    console.log(`descripcion recibida ${this.imagen}`);
    console.log(`descripcion recibida ${this.descripcion}`);
  }
  @Input()
  id:string='';
  descripcion: string='';
  nombre: string='';
  imagen: string='';
  inmueble: Inmueble [] = [];
    
}
