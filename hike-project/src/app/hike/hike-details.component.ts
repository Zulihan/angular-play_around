import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/*import { HikeService } from './hike.service';
*/
@Component({
    moduleId: module.id,
    selector: 'hike-details',
    templateUrl: 'hike-details.component.html'
})

export class HikeDetailsComponent implements OnInit {
    title: string;
    
    constructor(private _route: ActivatedRoute, private _router: Router){
    }  
    
    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        this.title = `Détails de la randonnée ${id}` // ${id} variable de template/ A n'utiliser qu'avec des backtick ``.
    }
    
    goBack(){
        // On a besoin de Router. Du coup on l'injecte dans le constructeur
        this._router.navigate(['/hikes']);
    }
}