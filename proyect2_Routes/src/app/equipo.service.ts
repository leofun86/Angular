import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    { nombre: 'Leo', especialidad: 'HTML', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a illum ipsa quod' },
    { nombre: 'Carlos', especialidad: 'PHP', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a illum ipsa quod' },
    { nombre: 'Martina', especialidad: 'CSS', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a illum ipsa quod' },
    { nombre: 'Ramiro', especialidad: 'JQUERY', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a illum ipsa quod' }
  ];

  constructor() {
    console.log('Servicio funcionando');
  }

  obtenerEquipo() {
    return this.equipo;
  }

  obtenerUno(i) {
    return this.equipo[i];
  }
}