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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(renderer, router) {
        this.renderer = renderer;
        this.router = router;
        this.title = 'LOGIN';
        this.subtitle = 'Welcome to IGA';
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.onBlur = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (target.value != '')
            this.renderer.setElementClass(target, "ui-state-filled", true);
        else
            this.renderer.setElementClass(target, "ui-state-filled", false);
    };
    LoginComponent.prototype.onLoginClick = function (event) {
        //alert(this.inptuser.nativeElement.value);
        //alert(this.inptpwd.nativeElement.value);
        //alert("Clicked Me!!!");
        this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus' },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }];
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('inptuser'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "inptuser", void 0);
__decorate([
    core_1.ViewChild('inptpwd'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "inptpwd", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-login',
        templateUrl: './html/login.html'
    }),
    __metadata("design:paramtypes", [core_1.Renderer, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map