import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObjectDataProvider } from '../../providers/object-data/object-data';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {
idSelected:any; 
	show:boolean; 
	characters = [];
	character = {id:0, name:null, desc:null}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getChars().subscribe(characters=>{this.characters = characters;});
  }
	selectItem(id){ 
    this.show = true;
    this.idSelected = id;
    let receivedChar:any; 
    this.itemsService.getChar(id)
    .subscribe(character=>{
      receivedChar = character;
      this.character = receivedChar;
    });
  }
}
