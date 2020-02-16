import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObjectDataProvider } from '../../providers/object-data/object-data';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
	idSelected:any; 
	show:boolean; 
	items = [];
	item = {id:0, name:null, desc:null}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getItems().subscribe(items=>{this.items = items;});
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
}
