import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObjectDataProvider } from '../../providers/object-data/object-data';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {ItemsService} from '../../services/items.service';

@IonicPage()
@Component({
  selector: 'page-enemies',
  templateUrl: 'enemies.html',
})
export class EnemiesPage {
  	idSelected:any; 
	show:boolean; 
	enemies = [];
	enemy = {id:0, name:null, desc:null}; 
    constructor(public navCtrl: NavController, public itemsService:ItemsService){ 
	this.show = false; 
    this.idSelected = 0; 
    itemsService.getEnemigos().subscribe(enemies=>{this.enemies = enemies;});
  }
	selectItem(id){ 
    this.show = true;
    this.idSelected = id;
    let receivedEnemy:any; 
    this.itemsService.getEnemigo(id)
    .subscribe(enemy=>{
      receivedEnemy = enemy;
      this.enemy = receivedEnemy;
    });
  }
}
