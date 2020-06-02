import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [FormularioComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class PagesModule { }
