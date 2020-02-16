import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { CrearnuevosPage } from '../crearnuevos/crearnuevos';

/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpanel',
  templateUrl: 'adminpanel.html',
})
export class AdminpanelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpanelPage');
  }
  
  IrAPagina(){
    this.navCtrl.push(PrincipalPage);
  }
  
  IrCrear(){
    this.navCtrl.push(CrearnuevosPage);
  }

}
