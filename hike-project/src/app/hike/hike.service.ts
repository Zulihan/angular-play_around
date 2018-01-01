import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hike } from './hike';
import 'rxjs/add/operator/map'; // ReactiveX.js
import 'rxjs/add/operator/do'; // permet d'afficher retour dans la console

// @Injectable() est obligatoire uniquement quand on injecte dans le constructeur d'un service un autre service
// Mais par convention, l'équipe d'Angular 2 recommande de toujours décorer un service à l'aide de @Injectable
// Même si l'on n'injecte rien dans le constructeur de notre service
// NE PAS METTRE DE ; à la fin d'un décorateur
@Injectable()

export class HikeService {
    
    constructor(private _http:Http){
        
    }
    
    /*getHikes() {
        return this.hikes;
    }*/
    
    getHikesFromAPI(){
       return this._http.get('app/api/hikes.json') // Observable
            .do(x => console.log(x))
            .map(hikes => hikes.json())
    }
}