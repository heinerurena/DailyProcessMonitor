webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailPageModule", function() { return ServiceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_detail__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceDetailPageModule = (function () {
    function ServiceDetailPageModule() {
    }
    ServiceDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_detail__["a" /* ServiceDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_detail__["a" /* ServiceDetailPage */]),
            ],
        })
    ], ServiceDetailPageModule);
    return ServiceDetailPageModule;
}());

//# sourceMappingURL=service-detail.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailPage; });
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
 * Generated class for the ServiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceDetailPage = (function () {
    function ServiceDetailPage(navCtrl, navParams, processService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.processService = processService;
        this.serviceId = navParams.get('_serviceId');
        this.serviceCode = navParams.get('_serviceCode');
        this.selectedDate = navParams.get('_selectedDate');
    }
    ServiceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.processService.getInterfaseStatus(this.serviceId, this.selectedDate).subscribe(function (interfaseQuerry) { _this.interfaseResult = interfaseQuerry, console.log(_this.interfaseResult); });
    };
    ServiceDetailPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.processService.getInterfaseStatus(this.serviceId, this.selectedDate)
            .subscribe(function (interfaseQuerry) { _this.interfaseResult = interfaseQuerry; refresher.complete(); console.log(_this.interfaseResult); });
    };
    ServiceDetailPage.prototype.getEvent = function (source, event) {
        this.navCtrl.push('EventDetailPage', { _source: source, _event: event, _selectedDate: this.selectedDate }, { animate: true, direction: 'forward' });
    };
    ServiceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceDetailPage');
    };
    ServiceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-detail',template:/*ion-inline-start:"D:\Asp.NET\Ionic\CMX-DailyProcessMonitorComplete-B\CMX-DailyProcessMonitor\src\pages\service-detail\service-detail.html"*/'<!--\n\n  Generated template for the ServiceDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{serviceCode}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                           pullingText="Pull to refresh"\n\n                           refreshingSpinner="circles"\n\n                           refreshingText="Actualizando...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-card *ngFor="let interfase of interfaseResult"  [ngStyle]="{\'border-color\': interfase.eventColor}" style="border-style:double">\n\n    <ion-card-header>\n\n      {{interfase.source}}\n\n      <ion-icon [ngStyle]="{color: interfase.eventColor}" name="ios-football" item-start></ion-icon>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n\n        <ion-icon name="timer" item-start></ion-icon>\n\n        Ult.Ejecución\n\n        <ion-badge item-end>{{interfase.endTime|date:\'yyyy-MM-dd HH:mm:ss\'}}</ion-badge>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="play" item-start></ion-icon>\n\n        Cant.Ejecuciones\n\n        <ion-badge item-end>{{interfase.numberOfExecutions}}</ion-badge>\n\n      </ion-item>\n\n      <button ion-button icon-left (click)="getEvent(interfase.source,interfase.enterfaseEvent)">\n\n        <ion-icon name="search"></ion-icon>\n\n        Detalle\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Asp.NET\Ionic\CMX-DailyProcessMonitorComplete-B\CMX-DailyProcessMonitor\src\pages\service-detail\service-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_processMonitorService__["a" /* processMonitorService */]])
    ], ServiceDetailPage);
    return ServiceDetailPage;
}());

//# sourceMappingURL=service-detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map