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
var common = require('./app.global');
var TopRightMenuComponent = (function () {
    function TopRightMenuComponent(renderer, myElement) {
        this.renderer = renderer;
        this.elementRef = myElement;
        document.addEventListener('click', this.offClickHandler.bind(this));
    }
    TopRightMenuComponent.prototype.showMenu = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (common.findParentBySelector(target, 'a')) {
            if (!common.findParentBySelector(target, 'li').classList.contains('active-topmenuitem')) {
                common.resetTopMenu();
            }
            common.findParentBySelector(target, 'li').classList.toggle('active-topmenuitem');
            //this.renderer.setElementClass(common.findParentBySelector(target,'li'), "active-topmenuitem", true);
            event.preventDefault();
            return;
        }
    };
    TopRightMenuComponent.prototype.offClickHandler = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            common.resetTopMenu();
        }
        else {
            this.showMenu(event);
        }
    };
    TopRightMenuComponent.prototype.inputChanged = function (event) {
        if (event.target.value) {
            console.log('not empty!');
            this.renderer.setElementClass(event.target, "ui-state-filled", true);
        }
        else {
            this.renderer.setElementClass(event.target, "ui-state-filled", false);
        }
    };
    TopRightMenuComponent.prototype.onFocus = function (target) {
        //target.type = 'date';
        alert('focus');
    };
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TopRightMenuComponent.prototype, "inputChanged", null);
    __decorate([
        core_1.HostListener('focus', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TopRightMenuComponent.prototype, "onFocus", null);
    TopRightMenuComponent = __decorate([
        core_1.Component({
            selector: 'top-rightmenu',
            templateUrl: './html/toprightmenu.html'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TopRightMenuComponent);
    return TopRightMenuComponent;
}());
exports.TopRightMenuComponent = TopRightMenuComponent;
//# sourceMappingURL=toprightmenu.component.js.map