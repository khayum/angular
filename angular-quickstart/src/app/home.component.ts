import {Component,HostListener,HostBinding,Directive,Input,ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {} from 'primeng/primeng';
import {TopRightMenuComponent} from './toprightmenu.component';

@Component({
    selector : 'my-home',
    templateUrl:'./html/home.html'
})

export class HomeComponent{

  private toggleDataTable : boolean = false;

  toggleComponent(event:any){
     this.toggleDataTable = !this.toggleDataTable;
     console.log("  this.toggleDataTable  "+ this.toggleDataTable);
     event.preventDefault();
     return;
  }

}