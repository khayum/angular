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
var car_service_1 = require('./car.service');
var DataTableComponent = (function () {
    function DataTableComponent(carService) {
        this.carService = carService;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    DataTableComponent = __decorate([
        core_1.Component({
            selector: 'my-table',
            templateUrl: './html/datatable.html',
            providers: [car_service_1.CarService]
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], DataTableComponent);
    return DataTableComponent;
}());
exports.DataTableComponent = DataTableComponent;
//# sourceMappingURL=datatable.component.js.map