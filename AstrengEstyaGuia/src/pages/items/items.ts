import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObjectDataProvider } from '../../providers/object-data/object-data';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})


export class ItemsPage {
constructor(public navCtrl: NavController, public http   : HttpClient){ }
public xmlItems : any;
ionViewWillEnter()
{
   this.savedItemsLoader();
}

//Metodo para cargar el xml
savedItemsLoader(){
	  this.http.get('/assets/savedata/items.xml', 
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml') 
        .append('Access-Control-Allow-Methods', 'GET') 
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"), 
        responseType:'text'
      })
      .subscribe((data)=>
      {
         this.parseXML(data)//se llama al parser, que es el que traduce los xml a objeto
         .then((data)=>
         {
            this.xmlItems = data;
         });
      });
  }
//El metodo para parsear los datos xml a objetos de la lista
parseXML(data)
{
  return new Promise(resolve =>
  {
	 var k,
		 arr    = [],
		 parser = new xml2js.Parser(
		 {
			trim: true,
			explicitArray: true
		 });

	 parser.parseString(data, function (err, result) 
	 {
		 var obj = result.items;
		for(k in obj.item)
		{
			//a rellenar la lista...
		   var item = obj.item[k];
		   arr.push({  
			  id           : item.id[0],
			  nombre        : item.nombre[0],
			  descripcion : item.descripcion[0]
		   });
		}
		resolve(arr);
	 });
  });
}
  
  itemWriter():void{
	  //Crear metodo para escribir los items guardados en un xml... o algo así
  }

}
