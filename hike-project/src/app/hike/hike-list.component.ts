import { Component } from '@angular/core';
import { Hike } from './hike';
import { HikeService } from './hike.service';

@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list.component.html'
})

export class HikeListComponent{
    
    hikes: Hike[];
    searchTerm: string;
  // Injection de dépendance dans le constructeur
  // Avec l'injection de dépendance, ce sont les injecteurs fournis par le framework Angular 2 qui nous fournissent l'instance
  // d'un objet simplement en indiquant au constructeur de notre classe utilisatrice (celle qui souhaite utiliser des méthodes de cet objet), le type
  // de l'objet dont nous avons besoin
  // Autrement dit, avec l'injection de dépendance, nous ne faisons plus de "new", nous indiquons seulement le type attendu.
  // C'est à l'injecteur de nous fournir un objet de ce type.
  constructor(private _hikeService: HikeService){
    
  }
    
    ngOnInit(){
    //this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikesFromAPI()
                      .subscribe(
                              res => this.hikes = res,
                              err => console.error(err.status)
                      ); // peut prendre 3 callbacks en param / 1.succès, 2.erreur, 3.quand l'observable a fini
    console.log(this.hikes);
  }
  
  addToMyTodoHike(hikeToAdd: Hike){
      console.log(`Hike ${hikeToAdd.name} ajoutée`);
  }
}