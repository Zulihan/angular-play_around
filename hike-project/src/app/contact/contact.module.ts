import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactUsComponent } from './contact-us.component';
import { ContactService } from './contact.service';

@NgModule({
    imports:        [CommonModule, FormsModule],
    declarations:   [ContactUsComponent], // va comporter tous les components que l'on va créer
    exports:        [ContactUsComponent], // va exporter les components ainsi que des directives 
    providers:      [ ContactService ]
})
export class ContactModule{
    
}