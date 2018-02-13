import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing }  from './app.routing';
import { LoginComponent } from './login.component';
import {HomeComponent} from './home.component';
import {TopRightMenuComponent} from './toprightmenu.component';
import {MenuModule,MenuItem,DataTable,InputTextModule,DataTableModule,ButtonModule,DialogModule,SharedModule} from 'primeng/primeng';
import {Http, Response,HttpModule} from '@angular/http';
import {CarService} from './car.service'
import{DataTableComponent} from './datatable.component'
@NgModule({
    imports :[BrowserModule,
              routing,MenuModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,SharedModule,
        HttpModule],
    declarations : [AppComponent,
                    LoginComponent,HomeComponent,TopRightMenuComponent,DataTableComponent],
    bootstrap:[AppComponent],
    providers:    [CarService]
})

export class AppModule{}