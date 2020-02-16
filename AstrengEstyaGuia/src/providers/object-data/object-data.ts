import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

@Injectable()
export class ObjectDataProvider {
	ident:number = 0;
	nom:string = "";
	desc:string = "";

  constructor(id:number, nombre:string, descripcion:string) {
	  this.ident = id;
	  this.nom = nombre;
	  this.desc = descripcion;
    console.log('Un nuevo item ha sido generado');
  }
  

  
  itemWriter():void{
	  //Crear metodo para escribir los items guardados en un xml... o algo así
  }
  
}
