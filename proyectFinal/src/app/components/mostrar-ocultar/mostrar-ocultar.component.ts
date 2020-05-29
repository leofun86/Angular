import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-ocultar',
  templateUrl: './mostrar-ocultar.component.html',
  styleUrls: ['./mostrar-ocultar.component.css']
})
export class MostrarOcultarComponent implements OnInit {

  mostrar: boolean = false;
  mensaje: string = 'Hola, me estás leyendo';
  msj_link: string = 'Mostrar';

  mostrarOcultar() {
    if (this.mostrar) {
      this.mostrar=false;
      this.msj_link='Mostrar';
    } else {
      this.mostrar=true;
      this.msj_link='Ocultar';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
