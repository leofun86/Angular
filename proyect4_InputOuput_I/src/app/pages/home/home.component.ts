import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string = 'Nombre usuario';
  
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  cambioNombre() {
    this.nombre='Leopoldo';
    this.dataService.nombreUsuario=this.nombre;
  }

  hijoCambiaNombre (nuevoNombreHijo: string) {
    this.nombre=nuevoNombreHijo;
    this.dataService.nombreUsuario=nuevoNombreHijo;
  }
}
