import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num:number = 0;
  animales:Array<any> = [
    { tipo:'Perro', nombre:'Lisa', edad:10 }, 
    { tipo: 'Gato', nombre: 'Muni', edad:4 },
    { tipo: 'Pez', nombre: 'Putric', edad:2 }
  ];

}
