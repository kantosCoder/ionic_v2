import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs-compat';
import * as admin from 'firebase-admin';

@Injectable()
export class ItemsService{
	
    
    constructor(public afDB: AngularFireDatabase){

    }

    public getItems(){
        return this.afDB.list('fruits/').valueChanges(); 
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }
    public saveItem(fruit){
        let key = this.afDB.list('enemigos/').push(fruit).key;
        //Guardamos la fruta y obetenemos el id que firebase pone al nudulo de nuestra fruta.
        //Al guardarse sin id nuestra fruta, ahora la actualizamos con el id que firebase nos devuelve.
        fruit.id = key;
        this.afDB.database.ref('enemigos/'+fruit.id).set(fruit);
       
    }
	public addUser(){
		var admin = require("firebase-admin");
		admin.initializeApp({
		  credential: admin.credential.applicationDefault(),
		  databaseURL: 'https://astrengestya.firebaseio.com'
		});
		// Get a database reference to our blog
		var db = admin.database();
      var usersRef = db.child("enemigos");
		usersRef.set({
			nombre: "June 23, 1912",
			descripcion: "Alan Turing"
		});
    }
	
    public updateItem(fruit){
        //Actualizamos la fruta con el id que recibimos del objeto del parametro
        this.afDB.database.ref('fruits/'+fruit.id).set(fruit);
    }
    public getItem(id){
        return this.afDB.object('fruits/'+id).valueChanges();
        //Devolvera la fruta con el id que le pasamos por parametro
    }
    public removeItem(id){
        this.afDB.database.ref('fruits/'+id).remove();
        //Borrará la fruta con el id que le pasamos por parametro
    }

}