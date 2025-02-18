import { Routes } from '@angular/router';
import { CarruselComponent } from './component/carrusel/carrusel.component';
import { TablaComponent } from './component/tabla/tabla.component';

export const routes: Routes = [
  { path: 'home', component: CarruselComponent },
  { path: 'tabla', component: TablaComponent },
];
