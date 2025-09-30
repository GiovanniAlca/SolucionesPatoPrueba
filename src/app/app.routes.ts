import { Routes } from '@angular/router';
import { HomeComponent } from './landing/pages/home/home.component';
import { QuienesSomosComponent } from './landing/pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './landing/pages/servicios/servicios.component';
import { CatalogoCotizacionComponent } from './landing/pages/catalogo-cotizacion/catalogo-cotizacion.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  {path: 'catalogo-cotizacion', component: CatalogoCotizacionComponent},
  { path: '**', redirectTo: 'home'}
];