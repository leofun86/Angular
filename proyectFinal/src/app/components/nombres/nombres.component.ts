import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {

  nombres: string[];
  
  constructor() {
    this.nombres = [];
  }

  anadirNombre(nombre:string) {
    this.nombres.push(nombre);
    console.log(`Se ha añadido el nombre ${nombre}`);
  }

  ngOnInit(): void {
  }

}
