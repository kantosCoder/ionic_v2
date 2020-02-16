import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import '@firebase/firestore';


@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  
  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( (res) => {   
    } ).catch(err => Promise.reject(err));
  }
  
  loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err => Promise.reject(err));
  }

}
