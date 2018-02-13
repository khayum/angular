'use strict';

export const collectionHas=function(a:any, b:any) { 
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}

export const findParentBySelector=function(elm:any, selector:any) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !this.collectionHas(all, cur)) { 
        cur = cur.parentNode; 
    }
    return cur; 
}

 export const resetTopMenu=function(){
    var a:any=document.querySelectorAll('li.active-topmenuitem');
    for(var i = 0, len = a.length; i < len; i ++) {
       a[i].classList.toggle('active-topmenuitem');
    }
  }

export class CommonModule{}