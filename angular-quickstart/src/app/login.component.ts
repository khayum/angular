import{Directive, Renderer,Component,AfterViewInit,ViewChild} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import {MenuModule,MenuItem} from 'primeng/primeng';
@Component({
    selector:'my-login',
    templateUrl: './html/login.html'
})

export class LoginComponent implements AfterViewInit {

    title='LOGIN';
    subtitle='Welcome to IGA';
    @ViewChild('inptuser')inptuser: any;
    @ViewChild('inptpwd')inptpwd: any;
  
  constructor( private renderer : Renderer,private router:Router) {
  
  }

ngAfterViewInit(){
  
}

onBlur(event:any){

    var target = event.target || event.srcElement || event.currentTarget;
    if(target.value!='')
        this.renderer.setElementClass(target, "ui-state-filled", true);
    else
        this.renderer.setElementClass(target, "ui-state-filled", false);
  }

  onLoginClick(event:any){
     //alert(this.inptuser.nativeElement.value);
     //alert(this.inptpwd.nativeElement.value);
     //alert("Clicked Me!!!");
     this.router.navigateByUrl('/home');
  }

  private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa-refresh'},
                {label: 'Redo', icon: 'fa-repeat'}
            ]
        }];
    }

}