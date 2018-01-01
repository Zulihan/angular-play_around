import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent], // va comporter tous les components que l'on va créer
    exports: [HomeComponent] // va exporter les components ainsi que des directives
})
export class HomeModule {
    
}