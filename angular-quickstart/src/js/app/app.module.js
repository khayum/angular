"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home.component');
var toprightmenu_component_1 = require('./toprightmenu.component');
var primeng_1 = require('primeng/primeng');
var http_1 = require('@angular/http');
var car_service_1 = require('./car.service');
var datatable_component_1 = require('./datatable.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing, primeng_1.MenuModule, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule, primeng_1.SharedModule,
                http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                login_component_1.LoginComponent, home_component_1.HomeComponent, toprightmenu_component_1.TopRightMenuComponent, datatable_component_1.DataTableComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [car_service_1.CarService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map