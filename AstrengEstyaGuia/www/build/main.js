webpackJsonp([13],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crearnuevos_crearnuevos__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminpanelPage = /** @class */ (function () {
    function AdminpanelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminpanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminpanelPage');
    };
    AdminpanelPage.prototype.IrAPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AdminpanelPage.prototype.IrCrear = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crearnuevos_crearnuevos__["a" /* CrearnuevosPage */]);
    };
    AdminpanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpanel',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\adminpanel\adminpanel.html"*/'\n\n<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n\n\n    \n\n  <button ion-button color="tertiary" (click)="IrAPagina()"> <ion-icon ios="ios-wine" md="md-wine"> Cosas</ion-icon> </button>\n\n    \n\n  <button ion-button color="tertiary" (click)="IrCrear()"> <ion-icon ios="ios-wine" md="md-wine"> Crear</ion-icon> </button>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\adminpanel\adminpanel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdminpanelPage);
    return AdminpanelPage;
}());

//# sourceMappingURL=adminpanel.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\history\history.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white">\n\n<br/><br/>\n\n<ion-item-group style="background: black; color: white;">\n\n      <ion-item-divider color="light" style="background: black; color: white;"><b>La historia hasta ahora</b></ion-item-divider>\n\nTu vida es la misma de siempre. Todos los días vas a trabajar para ganar dinero y seguir vivo pero, ¿Para qué? todos los días son iguales, o al menos, lo eran hasta que un día, \n\nen el que como cualquier otro, fuiste a hacer la compra, cuando de pronto un encuentro inesperado hizo que todo lo que conocías se tambalee...\n\n<br/><br/>\n\nEn Astreng, nada es lo que parece, pero\n\na la vez, todo te resulta familiar.\n\n¿Qué sentido tiene todo esto? Descubrelo embarcandote en esta épica aventura de acción en la que tendrás que resolver los misterios de Astreng-Estya, un mundo\n\nque parece estar ligado de alguna forma con el tuyo.\n\n</ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\map\map.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/mapa.png\'); background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsPage = /** @class */ (function () {
    function ItemsPage(navCtrl, itemsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.itemsService = itemsService;
        this.items = [];
        this.item = { id: 0, name: null, desc: null };
        this.show = false;
        this.idSelected = 0;
        itemsService.getItems().subscribe(function (items) { _this.items = items; });
    }
    ItemsPage.prototype.selectItem = function (id) {
        var _this = this;
        this.show = true;
        this.idSelected = id;
        var receivedItem;
        this.itemsService.getItem(id)
            .subscribe(function (item) {
            receivedItem = item;
            _this.item = receivedItem;
        });
    };
    var _a, _b;
    ItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\items\items.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n<br/><br/>\n\n   <ion-item-group style="background: black; color: white;">\n\n      <ion-item-divider color="light" style="background: black; color: white;"><b>OBJETOS</b></ion-item-divider>\n\n	  <div padding *ngIf="show">\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;">Nombre:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="item.name" readonly></ion-input> \n\n      </ion-item>\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;" style="background: black; color: white;">Descripcion:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="item.desc" readonly></ion-input>\n\n      </ion-item>\n\n	  \n\n	  <br/><br/>\n\n	    <button (click)="show = !show" ion-fab mini><ion-icon name="arrow-back"></ion-icon></button>\n\n	 </div>\n\n	 <div *ngIf="!show">\n\n    <ion-list style="background: black; color: white;">\n\n      <button ion-item *ngFor="let item of items" (click)="selectItem(item.id)" style="background: black; color: white;">\n\n        Nombre: {{ item.name }} | {{item.desc}}\n\n      </button> \n\n    </ion-list>\n\n	</div>\n\n</ion-item-group>\n\n</ion-content>'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\items\items.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" ? _b : Object])
    ], ItemsPage);
    return ItemsPage;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharactersPage = /** @class */ (function () {
    function CharactersPage(navCtrl, itemsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.itemsService = itemsService;
        this.character = [];
        this.character = { id: 0, name: null, desc: null };
        this.show = false;
        this.idSelected = 0;
        itemsService.getChars().subscribe(function (characters) { _this.characters = characters; });
    }
    CharactersPage.prototype.selectItem = function (id) {
        var _this = this;
        this.show = true;
        this.idSelected = id;
        var receivedChar;
        this.itemsService.getChar(id)
            .subscribe(function (character) {
            receivedChar = character;
            _this.character = receivedChar;
        });
    };
    var _a, _b;
    CharactersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-characters',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\characters\characters.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n<br/><br/>\n\n   <ion-item-group style="background: black; color: white;">\n\n      <ion-item-divider color="light" style="background: black; color: white;"><b>Personajes</b></ion-item-divider>\n\n	  <div padding *ngIf="show">\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;">Nombre:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="character.name" readonly></ion-input> \n\n      </ion-item>\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;" style="background: black; color: white;">Descripcion:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="character.desc" readonly></ion-input>\n\n      </ion-item>\n\n	  <br/><br/>\n\n	    <button (click)="show = !show" ion-fab mini><ion-icon name="arrow-back"></ion-icon></button>\n\n	 </div>\n\n	 <div *ngIf="!show">\n\n    <ion-list style="background: black; color: white;">\n\n      <button ion-item *ngFor="let character of characters" (click)="selectItem(character.id)" style="background: black; color: white;">\n\n        Nombre: {{ character.name }} | {{character.desc}}\n\n      </button> \n\n    </ion-list>\n\n	</div>\n\n</ion-item-group>\n\n</ion-content>'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\characters\characters.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" ? _b : Object])
    ], CharactersPage);
    return CharactersPage;
}());

//# sourceMappingURL=characters.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnemiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnemiesPage = /** @class */ (function () {
    function EnemiesPage(navCtrl, itemsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.itemsService = itemsService;
        this.enemies = [];
        this.enemy = { id: 0, name: null, desc: null };
        this.show = false;
        this.idSelected = 0;
        itemsService.getEnemigos().subscribe(function (enemies) { _this.enemies = enemies; });
    }
    EnemiesPage.prototype.selectItem = function (id) {
        var _this = this;
        this.show = true;
        this.idSelected = id;
        var receivedItem;
        this.itemsService.getEnemigo(id)
            .subscribe(function (enemy) {
            receivedEnemy = enemy;
            _this.enemy = receivedEnemy;
        });
    };
    var _a, _b;
    EnemiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enemies',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\enemies\enemies.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n<br/><br/>\n\n   <ion-item-group style="background: black; color: white;">\n\n      <ion-item-divider color="light" style="background: black; color: white;"><b>Enemigos</b></ion-item-divider>\n\n	  <div padding *ngIf="show">\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;">Nombre:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="enemy.name" readonly></ion-input> \n\n      </ion-item>\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;" style="background: black; color: white;">Descripcion:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="enemy.desc" readonly></ion-input>\n\n      </ion-item>\n\n	  <br/><br/>\n\n	    <button (click)="show = !show" ion-fab mini><ion-icon name="arrow-back"></ion-icon></button>\n\n	 </div>\n\n	 <div *ngIf="!show">\n\n    <ion-list style="background: black; color: white;">\n\n      <button ion-item *ngFor="let enemy of enemies" (click)="selectItem(enemy.id)" style="background: black; color: white;">\n\n        Nombre: {{ enemy.name }} | {{enemy.desc}}\n\n      </button> \n\n    </ion-list>\n\n	</div>\n\n</ion-item-group>\n\n</ion-content>'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\enemies\enemies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" ? _b : Object])
    ], EnemiesPage);
    return EnemiesPage;
}());

//# sourceMappingURL=enemies.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearnuevosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearobjeto_crearobjeto__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crearpersonaje_crearpersonaje__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crearenemigo_crearenemigo__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CrearnuevosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearnuevosPage = /** @class */ (function () {
    function CrearnuevosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CrearnuevosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearnuevosPage');
    };
    CrearnuevosPage.prototype.IrAObjetos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crearobjeto_crearobjeto__["a" /* CrearobjetoPage */]);
    };
    CrearnuevosPage.prototype.IrAEnemigos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__crearenemigo_crearenemigo__["a" /* CrearenemigoPage */]);
    };
    CrearnuevosPage.prototype.IrAPersonajes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crearpersonaje_crearpersonaje__["a" /* CrearpersonajePage */]);
    };
    CrearnuevosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crearnuevos',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearnuevos\crearnuevos.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n<ion-item-divider color="light" style="background: black; color: white; margin-top: 55%"><b>OBJETOS</b></ion-item-divider>\n\n<ion-list>\n\n  <ion-item style="background: black; color: white;">\n\n    <ion-label (click)="IrAObjetos()">Objetos</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n    <ion-label (click)="IrAPersonajes()">Personajes</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n    <ion-label (click)="IrAEnemigos()">Enemigos</ion-label>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearnuevos\crearnuevos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CrearnuevosPage);
    return CrearnuevosPage;
}());

//# sourceMappingURL=crearnuevos.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearobjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearobjetoPage = /** @class */ (function () {
    function CrearobjetoPage(navCtrl, itemsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.itemsService = itemsService;
        this.items = [];
        this.item = { id: 0, name: null, desc: null };
        this.show = false;
        this.idSelected = 0;
        itemsService.getItems().subscribe(function (items) { _this.items = items; });
    }
    CrearobjetoPage.prototype.saveItem = function () {
        if (this.idSelected != 0) {
            this.itemsService.updateItem(this.item);
            ;
        }
        else {
            this.itemsService.saveItem(this.item);
            ;
        }
        this.clear();
    };
    CrearobjetoPage.prototype.selectItem = function (id) {
        var _this = this;
        this.show = true;
        this.idSelected = id;
        var receivedItem;
        this.itemsService.getItem(id)
            .subscribe(function (item) {
            receivedItem = item;
            _this.item = receivedItem;
        });
    };
    CrearobjetoPage.prototype.removeSelectedItem = function () {
        this.itemsService.removeItem(this.idSelected);
        this.clear();
    };
    CrearobjetoPage.prototype.clear = function () {
        this.show = false;
        this.idSelected = 0;
        this.item.name = null;
        this.item.id = null;
        this.item.desc = null;
    };
    var _a, _b;
    CrearobjetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crearobjeto',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearobjeto\crearobjeto.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n<br/><br/>\n\n   <ion-item-group style="background: black; color: white;">\n\n      <ion-item-divider color="light" style="background: black; color: white;"><b>OBJETOS</b></ion-item-divider>\n\n	<div padding *ngIf="show">\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;">Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="item.name" style="background: black; color: white;"></ion-input> \n\n      </ion-item>\n\n      <ion-item style="background: black; color: white;">\n\n        <ion-label floating style="background: black; color: white;" style="background: black; color: white;">Descripcion</ion-label>\n\n        <ion-input type="text" [(ngModel)]="item.desc"></ion-input>\n\n      </ion-item>\n\n        <button (click)="saveItem()" ion-button full>Guardar</button>\n\n        <button *ngIf="idSelected != 0" (click)="removeSelectedItem()" ion-button full color="danger">Borrar</button>\n\n  </div>\n\n    <ion-list style="background: black; color: white;">\n\n      <button ion-item *ngFor="let item of items" (click)="selectItem(item.id)" style="background: black; color: white;">\n\n        Nombre: {{ item.name }} | {{item.desc}}\n\n      </button>  \n\n    </ion-list>\n\n  <ion-fab bottom right>\n\n      <button (click)="show = !show" ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-item-group>\n\n</ion-content>'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearobjeto\crearobjeto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" ? _b : Object])
    ], CrearobjetoPage);
    return CrearobjetoPage;
}());

//# sourceMappingURL=crearobjeto.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearpersonajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CrearpersonajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearpersonajePage = /** @class */ (function () {
    function CrearpersonajePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CrearpersonajePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearpersonajePage');
    };
    CrearpersonajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crearpersonaje',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearpersonaje\crearpersonaje.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n\n\n    \n\n    <form style="margin-top: 30%">\n\n        <ion-item>\n\n            <ion-label floating>Nombre</ion-label>\n\n            <ion-input name="email" type="text" autocapitalize="off" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Descripcion</ion-label>\n\n            <ion-input name="descripcion" type="text" required></ion-input>\n\n        </ion-item>\n\n        \n\n        <div padding>\n\n            <button ion-button type="submit" color="primary" block>Crear</button>\n\n        </div>\n\n    </form>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearpersonaje\crearpersonaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CrearpersonajePage);
    return CrearpersonajePage;
}());

//# sourceMappingURL=crearpersonaje.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearenemigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CrearenemigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearenemigoPage = /** @class */ (function () {
    function CrearenemigoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CrearenemigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearenemigoPage');
    };
    CrearenemigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crearenemigo',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearenemigo\crearenemigo.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white" align="center">\n\n     <form style="margin-top: 30%">\n\n        <ion-item>\n\n            <ion-label floating>Nombre</ion-label>\n\n            <ion-input name="email" type="text" autocapitalize="off" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Descripcion</ion-label>\n\n            <ion-input name="descripcion" type="text" required></ion-input>\n\n        </ion-item>\n\n        \n\n        <div padding>\n\n            <button ion-button type="submit" color="primary" block>Crear</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\crearenemigo\crearenemigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CrearenemigoPage);
    return CrearenemigoPage;
}());

//# sourceMappingURL=crearenemigo.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcercadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercadePage = /** @class */ (function () {
    function AcercadePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercadePage');
    };
    AcercadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acercade',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\acercade\acercade.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white; font-size: 24px" align="center">\n\n    <p style="margin-top: 75%; ;font-size:22px;">Aplicación desarrollada por<br><br>Hector Cantos <br>y<br> Miguel Angel Marquina</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\acercade\acercade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcercadePage);
    return AcercadePage;
}());

//# sourceMappingURL=acercade.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acercade/acercade.module": [
		504,
		12
	],
	"../pages/adminpanel/adminpanel.module": [
		502,
		11
	],
	"../pages/characters/characters.module": [
		503,
		10
	],
	"../pages/crearenemigo/crearenemigo.module": [
		506,
		9
	],
	"../pages/crearnuevos/crearnuevos.module": [
		507,
		8
	],
	"../pages/crearobjeto/crearobjeto.module": [
		505,
		7
	],
	"../pages/crearpersonaje/crearpersonaje.module": [
		508,
		6
	],
	"../pages/enemies/enemies.module": [
		509,
		5
	],
	"../pages/history/history.module": [
		512,
		4
	],
	"../pages/items/items.module": [
		510,
		3
	],
	"../pages/login/login.module": [
		513,
		0
	],
	"../pages/map/map.module": [
		511,
		2
	],
	"../pages/principal/principal.module": [
		514,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsService = /** @class */ (function () {
    function ItemsService(afDB) {
        this.afDB = afDB;
    }
    //SERVICIO ITEMS
    ItemsService.prototype.getItems = function () {
        return this.afDB.list('objetos/').valueChanges();
    };
    ItemsService.prototype.saveItem = function (item) {
        var key = this.afDB.list('objetos/').push(item).key;
        item.id = key;
        this.afDB.database.ref('objetos/' + item.id).set(item);
    };
    ItemsService.prototype.updateItem = function (item) {
        this.afDB.database.ref('objetos/' + item.id).set(item);
    };
    ItemsService.prototype.getItem = function (id) {
        return this.afDB.object('objetos/' + id).valueChanges();
    };
    ItemsService.prototype.removeItem = function (id) {
        this.afDB.database.ref('objetos/' + id).remove();
    };
    //SERVICIO ENEMIGOS
    ItemsService.prototype.getEnemigos = function () {
        return this.afDB.list('enemigos/').valueChanges();
    };
    ItemsService.prototype.saveEnemigo = function (enemy) {
        var key = this.afDB.list('enemigos/').push(enemy).key;
        enemy.id = key;
        this.afDB.database.ref('enemigos/' + enemy.id).set(enemy);
    };
    ItemsService.prototype.updateEnemigo = function (enemy) {
        this.afDB.database.ref('enemigos/' + enemy.id).set(enemy);
    };
    ItemsService.prototype.getEnemigo = function (id) {
        return this.afDB.object('enemigos/' + id).valueChanges();
    };
    ItemsService.prototype.removeEnemigo = function (id) {
        this.afDB.database.ref('enemigos/' + id).remove();
    };
    //SERVICIO PERSONAJES
    ItemsService.prototype.getChars = function () {
        return this.afDB.list('personajes/').valueChanges();
    };
    ItemsService.prototype.saveChar = function (character) {
        var key = this.afDB.list('personajes/').push(character).key;
        character.id = key;
        this.afDB.database.ref('personajes/' + character.id).set(character);
    };
    ItemsService.prototype.updateChar = function (character) {
        this.afDB.database.ref('personajes/' + character.id).set(character);
    };
    ItemsService.prototype.getChar = function (id) {
        return this.afDB.object('personajes/' + id).valueChanges();
    };
    ItemsService.prototype.removeChar = function (id) {
        this.afDB.database.ref('personajes/' + id).remove();
    };
    ItemsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["AngularFireDatabase"]])
    ], ItemsService);
    return ItemsService;
}());

//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal_principal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acercade_acercade__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adminpanel_adminpanel__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, auth, alerrtCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alerrtCtrl = alerrtCtrl;
        this.user = { email: '', password: '' };
    }
    HomePage.prototype.IrAPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__principal_principal__["a" /* PrincipalPage */]);
    };
    HomePage.prototype.IrAdminpanel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adminpanel_adminpanel__["a" /* AdminpanelPage */]);
    };
    HomePage.prototype.IrAcerca = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__acercade_acercade__["a" /* AcercadePage */]);
    };
    HomePage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password).then(function (userr) {
        })
            .catch(function (err) {
            var alert = _this.alerrtCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password)
            .then(function (userr) {
            if (_this.user.email == ('admin@admin.admin')) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adminpanel_adminpanel__["a" /* AdminpanelPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__principal_principal__["a" /* PrincipalPage */]);
            }
        })
            .catch(function (err) {
            var alert = _this.alerrtCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\home\home.html"*/'\n\n<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto;">\n\n    <form style="margin-top: 40%">\n\n        <ion-item style="background: transparent; color: white;">\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="user.email" name="email" type="text" autocapitalize="off" required></ion-input>\n\n        </ion-item>\n\n        <ion-item style="background: transparent; color: white;">\n\n            <ion-label floating>Contraseña</ion-label>\n\n            <ion-input [(ngModel)]="user.password" name="password" type="password" required></ion-input>\n\n        </ion-item>\n\n        \n\n        <div padding>\n\n            <button ion-button (click)="login()" type="submit" color="dark" block>Login&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle"></ion-icon>\n\n</button>\n\n            <button ion-button (click)="signin()" type="submit" color="dark" block>Registro&nbsp;&nbsp;<ion-icon ios="ios-create" md="md-create"></ion-icon></button>\n\n        </div>\n\n    \n\n    \n\n    </form>\n\n  <button ion-button color="tertiary" (click)="IrAPagina()"> <ion-icon ios="ios-wine" md="md-wine"> Toma login xd</ion-icon> </button>\n\n    \n\n  <button ion-button color="tertiary" (click)="IrAdminpanel()"> <ion-icon ios="ios-wine" md="md-wine"> Admin</ion-icon> </button>\n\n    \n\n      \n\n  <button ion-button color="dark" (click)="IrAcerca()" style="margin-top: 30%; margin-left: 30%">Acerca de&nbsp;&nbsp;<ion-icon ios="ios-people" md="md-people"></ion-icon> </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_auth__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_database__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__firebase_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_firestore__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
        }).catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_history_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_items_items__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_characters_characters__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_enemies_enemies__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_acercade_acercade__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_crearobjeto_crearobjeto__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_crearpersonaje_crearpersonaje__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_crearenemigo_crearenemigo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crearnuevos_crearnuevos__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_adminpanel_adminpanel__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_object_data_object_data__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_items_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var firebaseConfig = {
    apiKey: "AIzaSyAObcUl6fqmw3mzK8byU887dTwUx-j-RJs",
    authDomain: "astrengestya.firebaseapp.com",
    databaseURL: "https://astrengestya.firebaseio.com",
    projectId: "astrengestya",
    storageBucket: "astrengestya.appspot.com",
    messagingSenderId: "788194505676",
    appId: "1:788194505676:web:230befeb01e896f6af6369",
    measurementId: "G-Q0D7Y507PK"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_characters_characters__["a" /* CharactersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_enemies_enemies__["a" /* EnemiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_acercade_acercade__["a" /* AcercadePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crearnuevos_crearnuevos__["a" /* CrearnuevosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crearobjeto_crearobjeto__["a" /* CrearobjetoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_crearpersonaje_crearpersonaje__["a" /* CrearpersonajePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_crearenemigo_crearenemigo__["a" /* CrearenemigoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adminpanel/adminpanel.module#AdminpanelPageModule', name: 'AdminpanelPage', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/characters/characters.module#CharactersPageModule', name: 'CharactersPage', segment: 'characters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acercade/acercade.module#AcercadePageModule', name: 'AcercadePage', segment: 'acercade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crearobjeto/crearobjeto.module#CrearobjetoPageModule', name: 'CrearobjetoPage', segment: 'crearobjeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crearenemigo/crearenemigo.module#CrearenemigoPageModule', name: 'CrearenemigoPage', segment: 'crearenemigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crearnuevos/crearnuevos.module#CrearnuevosPageModule', name: 'CrearnuevosPage', segment: 'crearnuevos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crearpersonaje/crearpersonaje.module#CrearpersonajePageModule', name: 'CrearpersonajePage', segment: 'crearpersonaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enemies/enemies.module#EnemiesPageModule', name: 'EnemiesPage', segment: 'enemies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_items_items__["a" /* ItemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_characters_characters__["a" /* CharactersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_enemies_enemies__["a" /* EnemiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_acercade_acercade__["a" /* AcercadePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_crearnuevos_crearnuevos__["a" /* CrearnuevosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crearobjeto_crearobjeto__["a" /* CrearobjetoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_crearpersonaje_crearpersonaje__["a" /* CrearpersonajePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_crearenemigo_crearenemigo__["a" /* CrearenemigoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__services_items_service__["a" /* ItemsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_object_data_object_data__["a" /* ObjectDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectDataProvider = /** @class */ (function () {
    function ObjectDataProvider(id, nombre, descripcion) {
        this.ident = 0;
        this.nom = "";
        this.desc = "";
        this.ident = id;
        this.nom = nombre;
        this.desc = descripcion;
        console.log('Un nuevo item ha sido generado');
    }
    ObjectDataProvider.prototype.itemWriter = function () {
        //Crear metodo para escribir los items guardados en un xml... o algo así
    };
    ObjectDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Number, String, String])
    ], ObjectDataProvider);
    return ObjectDataProvider;
}());

//# sourceMappingURL=object-data.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__characters_characters__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enemies_enemies__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    //funcion para cargar la página x(de la lista)
    PrincipalPage.prototype.topage = function (x) {
        if (x == ("history")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__history_history__["a" /* HistoryPage */]);
        }
        if (x == ("map")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
        }
        if (x == ("items")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__items_items__["a" /* ItemsPage */]);
        }
        if (x == ("chars")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__characters_characters__["a" /* CharactersPage */]);
        }
        if (x == ("enemy")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__enemies_enemies__["a" /* EnemiesPage */]);
        }
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"D:\ionic_v2\AstrengEstyaGuia\src\pages\principal\principal.html"*/'\n\n<ion-content padding style="background-image: url(\'assets/imgs/fondo.jpg\');   background-repeat: no-repeat; position: relative; margin-left: auto; margin-right: auto; color: white">\n\n<br/><br/>\n\n<h2>Menú principal</h2>\n\n<br/>\n\n	<ion-list style="background: black; color: white;">\n\n	<ion-item style="background: black; color: white;">\n\n	</ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n  <ion-icon name="albums" item-end></ion-icon>\n\n    <ion-label (click)=\'topage("history")\' style="background: black; color: white;">La historia hasta ahora</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n    <ion-icon name="map" item-end></ion-icon>\n\n      <ion-label (click)=\'topage("map")\' style="background: black; color: white;">El mundo del juego</ion-label>\n\n	 </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n  <ion-icon name="trophy" item-end></ion-icon>\n\n    <ion-label (click)=\'topage("items")\' style="background: black; color: white;">Objetos</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n  <ion-icon name="person" item-end></ion-icon>\n\n    <ion-label (click)=\'topage("chars")\' style="background: black; color: white;">Personajes</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n  <ion-icon name="sad" item-end></ion-icon>\n\n    <ion-label (click)=\'topage("enemy")\' style="background: black; color: white;">Enemigos</ion-label>\n\n  </ion-item>\n\n  <ion-item style="background: black; color: white;">\n\n	</ion-item>\n\n</ion-list>\n\n<!--\n\nCosillas útiles para pantalla de config\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label>Input</ion-label>\n\n    <ion-input></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Toggle</ion-label>\n\n    <ion-toggle slot="end"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Radio</ion-label>\n\n    <ion-radio slot="end"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Checkbox</ion-label>\n\n    <ion-checkbox slot="start"></ion-checkbox>\n\n  </ion-item>\n\n</ion-list>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic_v2\AstrengEstyaGuia\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map