"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home.component');
var datatable_component_1 = require('./datatable.component');
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'demo', component: datatable_component_1.DataTableComponent }
        ] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map