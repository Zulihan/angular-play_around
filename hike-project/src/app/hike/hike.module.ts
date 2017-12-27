import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeListComponent } from './hike-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HikeListComponent], // va comporter tous les components que l'on va créer
    exports: [], // va exporter les components ainsi que des directives
    providers: [] // les services
})

export class HikeModule {
    
}