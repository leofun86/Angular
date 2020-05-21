import { Component, OnInit } from '@angular/core';
import { DatosService } from './../datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  datos:Observable<any>;

  constructor(public _datos:DatosService) {
    this.datos=_datos.obtenerDatos();
  }

  ngOnInit(): void {
  }

}
