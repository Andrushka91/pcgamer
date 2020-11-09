import { Injectable } from '@angular/core';
import { Review } from '../models/Review';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  currentDate = new Date();
  

  constructor(private fireStore: AngularFirestore) { }

  //CRUD (Create,Read,Update,Delete)
  public getReviews(): any {
    return this.fireStore.collection('reviews').snapshotChanges();
  }

  public buscarReview(documentId: string): any {
    return this.fireStore.collection('reviews').doc(documentId).snapshotChanges();
  }

  public insertar(nuevo: any) {
    return this.fireStore.collection('reviews').add(nuevo);
  }

  public eliminar(documentId: string): any {
    return this.fireStore.collection('reviews').doc(documentId).delete();
  }

  public modificar(documentId: string, data: any): any {
    return this.fireStore.collection('reviews').doc(documentId).set(data);
  }


}
