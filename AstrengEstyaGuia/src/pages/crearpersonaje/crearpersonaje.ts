import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-crearpersonaje',
  templateUrl: 'crearpersonaje.html',
})
export class CrearpersonajePage {
	idSelected:any; 
	show:boolean; 
	characters = [];
	character = {id:0, name:"", desc:""}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getChars().subscribe(characters=>{this.characters = characters;});
  }
saveChar(){
	if(this.idSelected != 0){
       this.itemsService.updateChar(this.character);;
    }else{
       this.itemsService.saveChar(this.character);;
    }
    this.clear();
}
selectChar(id){ 
    this.show = true;
    this.idSelected = id;
    let receivedChar:any; 
    this.itemsService.getChar(id)
    .subscribe(character=>{
      receivedChar = character;
      this.character = receivedChar;
    });
  }
  removeSelectedChar(){
    this.itemsService.removeChar(this.idSelected);
    this.clear();
  }
  clear(){
    this.show = false;
    this.idSelected = 0;
    this.character.name = "";
    this.character.id = 0;
    this.character.desc  = "";
  }
}
