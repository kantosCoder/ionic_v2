import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearobjetoPage } from '../crearobjeto/crearobjeto';
import { CrearpersonajePage } from '../crearpersonaje/crearpersonaje';
import { CrearenemigoPage } from '../crearenemigo/crearenemigo';

/**
 * Generated class for the CrearnuevosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearnuevos',
  templateUrl: 'crearnuevos.html',
})
export class CrearnuevosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearnuevosPage');
  }
  
  IrAObjetos(){
    this.navCtrl.push(CrearobjetoPage);
  }
  
  IrAEnemigos(){
    this.navCtrl.push(CrearenemigoPage);
  }
  
  IrAPersonajes(){
    this.navCtrl.push(CrearpersonajePage);
  }

}
