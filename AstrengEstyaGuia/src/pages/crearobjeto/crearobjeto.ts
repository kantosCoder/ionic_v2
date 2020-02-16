import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-crearobjeto',
  templateUrl: 'crearobjeto.html',
})
export class CrearobjetoPage {
	idSelected:any; 
	show:boolean; 
	items = [];
	item = {id:0, name:null, desc:null}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getItems().subscribe(items=>{this.items = items;});
  }
saveItem(){
	if(this.idSelected != 0){
       this.itemsService.updateItem(this.item);;
    }else{
       this.itemsService.saveItem(this.item);;
    }
    this.clear();
}
selectItem(id){ 
    this.show = true;
    this.idSelected = id;
    let receivedItem:any; 
    this.itemsService.getItem(id)
    .subscribe(item=>{
      receivedItem = item;
      this.item = receivedItem;
    });
  }
  removeSelectedItem(){
    this.itemsService.removeItem(this.idSelected);
    this.clear();
  }
  clear(){
    this.show = false;
    this.idSelected = 0;
    this.item.name = "";
    this.item.id = 0;
    this.item.desc  = "";
  }
}
