import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
  
  obtenerDatos(){
    return this.items;
  }
  
}
