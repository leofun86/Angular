import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any
  editarItem:any = {
    nombre:''
  }

  constructor(private conexion: ConexionService) {
    conexion.listaItems().subscribe(item=> {
      this.items = item;
      console.log(this.items);
    });
  }

  ngOnInit(): void {
  }

  eliminar(item) { this.conexion.eliminarItem(item); };

  editar(item) { this.editarItem=item; }

  itemEditado() { this.conexion.editarItem(this.editarItem); };

}
