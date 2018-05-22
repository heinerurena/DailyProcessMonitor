webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailPageModule = (function () {
    function EventDetailPageModule() {
    }
    EventDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]),
            ],
        })
    ], EventDetailPageModule);
    return EventDetailPageModule;
}());

//# sourceMappingURL=event-detail.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_processMonitorService__ = __webpack_require__(99);
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
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams, alerCtrl, _processMonitorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this._processMonitorService = _processMonitorService;
        this.source = navParams.get('_source');
        this.event = navParams.get('_event');
        this.selectedDate = navParams.get('_selectedDate');
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailPage');
    };
    EventDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this._processMonitorService.getInterfaseEvents(this.source, this.event, this.selectedDate)
            .subscribe(function (eventResults) { _this.eventResult = eventResults; console.log(_this.eventResult); });
    };
    EventDetailPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this._processMonitorService.getInterfaseEvents(this.source, this.event, this.selectedDate)
            .subscribe(function (eventResults) { _this.eventResult = eventResults; refresher.complete(); console.log(_this.eventResult); });
    };
    EventDetailPage.prototype.doAlert = function (message) {
        var alert = this.alerCtrl.create({
            title: 'Detalle del Error',
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-detail',template:/*ion-inline-start:"D:\Asp.NET\Ionic\CMX-DailyProcessMonitorComplete-B\CMX-DailyProcessMonitor\src\pages\event-detail\event-detail.html"*/'<!--\n\n  Generated template for the EventDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{source}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                           pullingText="Pull to refresh"\n\n                           refreshingSpinner="circles"\n\n                           refreshingText="Actualizando...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card *ngIf="eventResult?.length == 0">\n\n\n\n    <ion-card-header>\n\n      Detalle \n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      No ha encontraró el detalle para la consulta efectuada\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-card *ngFor="let event of eventResult" [ngStyle]="{\'border-color\': event.eventColor}" style="border-style:double">\n\n    <ion-card-header>\n\n      <ion-avatar item-start>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <ion-icon *ngIf="event.event==\'OnWarning\'" style="color:gold; zoom:2.0" name="warning" large></ion-icon>\n\n              <ion-icon *ngIf="event.event==\'OnError\'" style="color:red; zoom:2.0" name="alert"></ion-icon>\n\n              <ion-icon *ngIf="event.event==\'OnInformation\'" style="color:blue; zoom:2.0" name="information-circle"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <ion-badge item-end style="background-color:cadetblue"> Inicio: {{event.startTime|date:\'HH:mm:ss\'}}</ion-badge>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n              <ion-badge item-end style="background-color:darkgreen">Fin: {{event.endTime|date:\'HH:mm:ss\'}}</ion-badge>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-avatar>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{event.message}}</p>\n\n\n\n      <!--\n\n      <button ion-button (click)="doAlert(event.message)">\n\n\n\n        <span> Mas Información</span>\n\n      </button>\n\n          -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Asp.NET\Ionic\CMX-DailyProcessMonitorComplete-B\CMX-DailyProcessMonitor\src\pages\event-detail\event-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_processMonitorService__["a" /* processMonitorService */]])
    ], EventDetailPage);
    return EventDetailPage;
}());

//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map