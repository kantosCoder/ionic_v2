import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal';
import { AcercadePage } from '../acercade/acercade';
import { AdminpanelPage } from '../adminpanel/adminpanel';
import { AuthProvider } from './../../providers/auth/auth';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = { email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public alerrtCtrl: AlertController) {

  }
  
  
  IrAPagina(){
    this.navCtrl.push(PrincipalPage);
  }
  
  IrAdminpanel(){
    this.navCtrl.push(AdminpanelPage);
  }
  
  IrAcerca(){
    this.navCtrl.push(AcercadePage);
  }
  
  signin(){

    this.auth.registerUser(this.user.email, this.user.password).then((userr) => { 

    
    })
    .catch( (err) => {
        let alert = this.alerrtCtrl.create({
            title: 'Error',
            subTitle: err.message,
            buttons: ['Aceptar']
            });
        alert.present();
  });
  }
  
  login(){
    this.auth.loginUser(this.user.email, this.user.password)
    .then((userr) => { 
    if(this.user.email==('admin@admin.admin')){this.navCtrl.push(AdminpanelPage);   }
	else{this.navCtrl.push(PrincipalPage);   }
    
    })
    .catch( (err) => {
        let alert = this.alerrtCtrl.create({
            title: 'Error',
            subTitle: err.message,
            buttons: ['Aceptar']
        });
        alert.present();
    });
  }
  
}
