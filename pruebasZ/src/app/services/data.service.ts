import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mensaje$ = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
