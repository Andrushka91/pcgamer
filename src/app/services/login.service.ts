import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn: boolean = false;

  constructor(private angularFireAuth: AngularFireAuth) {
 
  }

  login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email,password)
  }

  register(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.angularFireAuth.signOut();
  }

  checkState() {
    return this.angularFireAuth.authState;
  }

}

