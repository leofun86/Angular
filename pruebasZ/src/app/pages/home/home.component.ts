import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService) { }

  valorInicial:string ='';
  valorFinal:string='No hay mensaje...';

  ngOnInit(): void {
    
  }

  cambioValor() {
    this.valorFinal=this.valorInicial;
    this.dataService.mensaje$.emit(this.valorInicial);
  };
}
