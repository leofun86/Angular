import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { MostrarOcultarComponent } from './mostrar-ocultar/mostrar-ocultar.component';
import { NombresComponent } from './nombres/nombres.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [HolaMundoComponent, MostrarOcultarComponent, NombresComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HolaMundoComponent,
    MostrarOcultarComponent,
    NombresComponent,
    NavbarComponent
  ],
  bootstrap: [NavbarComponent]
})
export class ComponentsModule { }
