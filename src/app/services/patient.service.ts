import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(public Firestore: AngularFirestore) {}
  create<tipo>(data: tipo, enlace: string, id: string) {
    const itemsCollection = this.Firestore.collection<tipo>(enlace);
    return itemsCollection.doc(id).set(data); //va  a tardar
  }

  createId() {
    return this.Firestore.createId();
  }

  getDoc<tipo>(enlace: string, id: string):Observable<tipo>{
    const itemPatient = this.Firestore.collection<tipo>(enlace);
    return itemPatient.doc(id).valueChanges();
  }
  
  getCollectionChanges<tipo>(enlace:string):Observable<tipo[]>{
    const itemsCollection=this.Firestore.collection<tipo>(enlace);
    return itemsCollection.valueChanges();
  }

  deleteDoc<tipo>(enlace: string, id: string) {
    const itemPatient = this.Firestore.collection<tipo>(enlace);
    return itemPatient.doc(id).delete();
  }
  
  updateDoc<tipo>(data: tipo, enlace: string, id: string) {
    const itemPatient = this.Firestore.collection<tipo>(enlace);
    return itemPatient.doc(id).update(data);
  }
  

}
