import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs-compat';
import * as admin from 'firebase-admin';

@Injectable()
export class ItemsService{
	
    
    constructor(public afDB: AngularFireDatabase){

    }
	//SERVICIO ITEMS
    public getItems(){
        return this.afDB.list('objetos/').valueChanges(); 
    }
    public saveItem(item){
        let key = this.afDB.list('objetos/').push(item).key;
        item.id = key;
        this.afDB.database.ref('objetos/'+item.id).set(item);
    }
    public updateItem(item){
        this.afDB.database.ref('objetos/'+item.id).set(item);
    }
    public getItem(id){
        return this.afDB.object('objetos/'+id).valueChanges();
    }
    public removeItem(id){
        this.afDB.database.ref('objetos/'+id).remove();
    }
	//SERVICIO ENEMIGOS
    public getEnemigos(){
        return this.afDB.list('enemigos/').valueChanges(); 
    }
    public saveEnemigo(enemy){
        let key = this.afDB.list('enemigos/').push(enemy).key;
        enemy.id = key;
        this.afDB.database.ref('enemigos/'+enemy.id).set(enemy);
    }
    public updateEnemigo(enemy){
        this.afDB.database.ref('enemigos/'+enemy.id).set(enemy);
    }
    public getEnemigo(id){
        return this.afDB.object('enemigos/'+id).valueChanges();
    }
    public removeEnemigo(id){
        this.afDB.database.ref('enemigos/'+id).remove();
    }
	//SERVICIO PERSONAJES
    public getChars(){
        return this.afDB.list('personajes/').valueChanges(); 
    }
    public saveChar(character){
        let key = this.afDB.list('personajes/').push(character).key;
        character.id = key;
        this.afDB.database.ref('personajes/'+character.id).set(character);
    }
    public updateChar(character){
        this.afDB.database.ref('personajes/'+character.id).set(character);
    }
    public getChar(id){
        return this.afDB.object('personajes/'+id).valueChanges();
    }
    public removeChar(id){
        this.afDB.database.ref('personajes/'+id).remove();
    }
}