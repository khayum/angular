import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {HomeComponent} from './home.component';
import{TopRightMenuComponent} from './toprightmenu.component';
import{DataTableComponent} from './datatable.component'

const appRoutes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
   { path: 'home',  component: HomeComponent,children: [
         { path: 'demo', component: DataTableComponent }
    ]  }
];

export const routing = RouterModule.forRoot(appRoutes);