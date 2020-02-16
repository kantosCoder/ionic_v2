import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { HistoryPage } from '../pages/history/history';
import { MapPage } from '../pages/map/map';
import { ItemsPage } from '../pages/items/items';
import { CharactersPage } from '../pages/characters/characters';
import { EnemiesPage } from '../pages/enemies/enemies';
import { AcercadePage } from '../pages/acercade/acercade';
import { CrearobjetoPage } from '../pages/crearobjeto/crearobjeto';
import { CrearpersonajePage } from '../pages/crearpersonaje/crearpersonaje';
import { CrearenemigoPage } from '../pages/crearenemigo/crearenemigo';
import { CrearnuevosPage } from '../pages/crearnuevos/crearnuevos';
import { AdminpanelPage } from '../pages/adminpanel/adminpanel';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthProvider } from '../providers/auth/auth';
import { ObjectDataProvider } from '../providers/object-data/object-data';
import { HttpClientModule } from '@angular/common/http';
import {ItemsService} from '../services/items.service';


export const firebaseConfig = {
    apiKey: "AIzaSyAObcUl6fqmw3mzK8byU887dTwUx-j-RJs",
    authDomain: "astrengestya.firebaseapp.com",
    databaseURL: "https://astrengestya.firebaseio.com",
    projectId: "astrengestya",
    storageBucket: "astrengestya.appspot.com",
    messagingSenderId: "788194505676",
    appId: "1:788194505676:web:230befeb01e896f6af6369",
    measurementId: "G-Q0D7Y507PK"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    HistoryPage,
	MapPage,
	ItemsPage,
	CharactersPage,
	EnemiesPage,
    AcercadePage,
    CrearnuevosPage,
    AdminpanelPage,
    CrearobjetoPage,
    CrearpersonajePage,
    CrearenemigoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    HistoryPage,
	MapPage,
	ItemsPage,
	CharactersPage,
	EnemiesPage,
    AcercadePage,
    CrearnuevosPage,
    AdminpanelPage,
    CrearobjetoPage,
    CrearpersonajePage,
    CrearenemigoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	ItemsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ObjectDataProvider
  ]
})
export class AppModule {}
