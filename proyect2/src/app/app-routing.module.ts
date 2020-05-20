import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  //Ruta que dirige a InicioComponent
  { path: 'inicio', component: InicioComponent},
  //Ruta que dirige a ContactoComponent
  { path: 'contacto', component: ContactoComponent},
  //Ruta que dirige a NosotrosComponent
  { path: 'nosotros', component: NosotrosComponent},
  //Ruta que dirige a ErrorComponent
  { path: 'error', component: ErrorComponent},
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