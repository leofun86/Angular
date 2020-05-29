import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  personas: Persona[];
  mensaje: string = 'En espera de cambios...';
  valido: boolean = false;

  constructor() {
    this.personas=[];
  }

  aniadirPersona(nombre:string, apellidos:string, edad:number, DNI:string) {
    let persona: Persona;
    persona = new Persona(nombre, apellidos, edad, DNI);
    if(persona.esValido()) {
      this.personas.push(persona);
      this.valido=true;
      this.mensaje='¡Persona agregada!';
      document.getElementById('msj').classList.remove('bg-danger');
      document.getElementById('msj').classList.remove('bg-success');
      document.getElementById('msj').classList.add('bg-success');
    } else {
      this.valido=false;
      this.mensaje='¡Persona no agregada!';
      document.getElementById('msj').classList.remove('bg-success');
      document.getElementById('msj').classList.remove('bg-danger');
      document.getElementById('msj').classList.add('bg-danger');
    }
  }

  isEmpty() {
    return this.personas.length === 0;
  }

  ngOnInit(): void {
    document.getElementById('msj').classList.add('bg-danger');
  }

}

class Persona {
  
  nombre: string;
  apellidos: string;
  edad: number;
  DNI: string;
  
  constructor(nombre:string, apellidos:string, edad:number, DNI:string) {
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad;
    this.DNI=DNI;
  }

  esValido() {
    if(this.nombre==='' || this.apellidos==='' || this.edad===0 || this.DNI==='') {
      return false
    }
    return true;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }

  mostrarInfo() {
    return `Edad: ${this.edad}, DNI: ${this.DNI}`;
  }
}
