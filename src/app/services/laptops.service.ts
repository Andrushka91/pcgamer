import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  constructor(private firestore:AngularFirestore) { }

  public getLaptops():any{
    return this.firestore.collection('laptops').snapshotChanges();
  }

  searchLaptop(documentId:string):any{
    return this.firestore.collection('laptops').doc(documentId).snapshotChanges();
  }
}
