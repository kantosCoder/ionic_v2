import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { MapPage } from '../map/map';
import { ItemsPage } from '../items/items';
import { CharactersPage } from '../characters/characters';
import { EnemiesPage } from '../enemies/enemies';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  //funcion para cargar la página x(de la lista)
  topage(x:string):void{ //void es ESTRICTAMENTE NECESARIO
	  if(x==("history")){
		  this.navCtrl.push(HistoryPage);
	  }
	  if(x==("map")){
		  this.navCtrl.push(MapPage);
	  }
	  if(x==("items")){
		  this.navCtrl.push(ItemsPage);
	  }
	  if(x==("chars")){
		  this.navCtrl.push(CharactersPage);
	  }
	  if(x==("enemy")){
		  this.navCtrl.push(EnemiesPage);
	  }
  }
}