import {Component,HostListener,HostBinding,Directive,Input,ElementRef,Renderer} from '@angular/core';
import common = require('./app.global');

@Component({
  selector:'top-rightmenu',
  templateUrl:'./html/toprightmenu.html'
})


export class TopRightMenuComponent{
   private elementRef:ElementRef;
 
   constructor(private renderer : Renderer,myElement: ElementRef) {
       this.elementRef = myElement;
       document.addEventListener('click', this.offClickHandler.bind(this));
   }

    
  private showMenu(event:any) {
    let target = event.target || event.srcElement || event.currentTarget;
    
    if (common.findParentBySelector(target,'a')) {
      if(!common.findParentBySelector(target,'li').classList.contains('active-topmenuitem')){
          common.resetTopMenu();
      } 
        common.findParentBySelector(target,'li').classList.toggle('active-topmenuitem');
        //this.renderer.setElementClass(common.findParentBySelector(target,'li'), "active-topmenuitem", true);
        event.preventDefault();
        return;
    }
    
  }

   offClickHandler(event:any) {
        if (!this.elementRef.nativeElement.contains(event.target)) { 
             common.resetTopMenu();
        }else{
            this.showMenu(event); 
        }
    }

  @HostListener('keyup', ['$event'])
  inputChanged(event:any) {
    if (event.target.value) {
      console.log('not empty!');
      this.renderer.setElementClass(event.target, "ui-state-filled", true);
    }
    else{
        this.renderer.setElementClass(event.target, "ui-state-filled", false);
    } 
  }


  @HostListener('focus', ['$event.target'])
  onFocus(target:any) {
    //target.type = 'date';
    alert('focus');
  }

  
}