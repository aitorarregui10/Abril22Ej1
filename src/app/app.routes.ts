import { Routes } from '@angular/router';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { InfoComponent } from './info/info.component';
 
export const routes: Routes = [
    {path: 'inmueble', title: 'Inmuebles Futuro', component: InmuebleComponent},
    {path: 'info/:id', title: 'Información', component: InfoComponent},
    {path: '', redirectTo: '/inmueble', pathMatch: 'full'},
];