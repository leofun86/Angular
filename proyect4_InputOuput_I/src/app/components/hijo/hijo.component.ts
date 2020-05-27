import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  @Input() nombreHijo: string = 'Sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambioNombre() {
    this.nombreHijo='Juan Carles';
    this.cambioNombreHijo.emit( this.nombreHijo );
  }

}
