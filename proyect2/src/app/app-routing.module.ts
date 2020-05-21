import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  //Rutasd de los componentes
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'equipo/:id', component: EquipoComponent},
  //Si la ruta está vacía, dirige a InicioComponent
  { path: '', component: InicioComponent, pathMatch: 'full' },
  //Si la ruta escrita es deconocida redirige a InicioComponent
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }