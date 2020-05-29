import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { MostrarOcultarComponent } from './mostrar-ocultar/mostrar-ocultar.component';
import { NombresComponent } from './nombres/nombres.component';



@NgModule({
  declarations: [HolaMundoComponent, MostrarOcultarComponent, NombresComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HolaMundoComponent,
    MostrarOcultarComponent,
    NombresComponent
  ]
})
export class ComponentsModule { }
