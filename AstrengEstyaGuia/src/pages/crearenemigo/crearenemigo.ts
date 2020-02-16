import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-crearenemigo',
  templateUrl: 'crearenemigo.html',
})
export class CrearenemigoPage {
	idSelected:any; 
	show:boolean; 
	enemies = [];
	enemy = {id:0, name:null, desc:null}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getEnemigos().subscribe(enemies=>{this.enemies = enemies;});
  }
saveEnemy(){
	if(this.idSelected != 0){
       this.itemsService.updateEnemigo(this.enemy);;
    }else{
       this.itemsService.saveEnemigo(this.enemy);;
    }
    this.clear();
	}
selectEnemy(id){ 
    this.show = true;
    this.idSelected = id;
    let receivedEnemy:any; 
    this.itemsService.getEnemigo(id)
    .subscribe(enemy=>{
      receivedEnemy = enemy;
      this.enemy = receivedEnemy;
    });
  }
  removeSelectedEnemy(){
    this.itemsService.removeEnemigo(this.idSelected);
    this.clear();
  }
  clear(){
    this.show = false;
    this.idSelected = 0;
    this.enemy.name = "";
    this.enemy.id = 0;
    this.enemy.desc  = "";
  }
}