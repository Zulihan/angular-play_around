import { Component, trigger, state, animate, style, transition, keyframes } from '@angular/core';

@Component({
    moduleId: module.id,
    animations: [
        trigger('toggleElement', [
          state('open', style({ 'height': '*'})),
          state('closed', style({'height': '0', 'font-size': '0px'})),
          
          transition('closed <=> open', [
              animate(1000)])
        ])  
    ],
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent{
    title: string = 'Bienvenue sur le site de rando';
    open: boolean = false;
    toggleElement: string;
    
    toggle(){
        this.open = !this.open;
        if(this.open){
            this.toggleElement = 'open';
        } else {
            this.toggleElement = 'closed';
        }
    }
}