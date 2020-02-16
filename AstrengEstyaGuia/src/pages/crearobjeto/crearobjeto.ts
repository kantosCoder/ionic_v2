import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ItemsService} from '../../services/items.service';

/**
 * Generated class for the CrearobjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearobjeto',
  templateUrl: 'crearobjeto.html',
})
export class CrearobjetoPage {
	fruit = {id:0, name:null, quantity:null}; //Declaramos un objeto vacio de fruta
	fileName:string = 'archivo.txt';
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearobjetoPage');
  }

  ionViewWillEnter(){

}
// Here we import the File System module of node

saveFruit(){
      this.itemsService.saveItem(this.fruit);;
  }
   
  
}
