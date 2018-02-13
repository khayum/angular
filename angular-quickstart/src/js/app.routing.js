"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var toprightmenu_component_1 = require("./toprightmenu.component");
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'test', component: toprightmenu_component_1.TopRightMenuComponent }
        ] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map