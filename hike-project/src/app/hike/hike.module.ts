import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeService } from './hike.service';

import { HikeListComponent } from './hike-list.component';
import { HikeSummaryComponent } from './hike-summary.component';
import { HikeDetailsComponent } from './hike-details.component';
// Custom pipe. Filter hikes with input filter
import { HikeFilterPipe } from './hike-filter.pipe';


@NgModule({
    imports:        [CommonModule, RouterModule, FormsModule],
    declarations:   [HikeListComponent,
                    HikeSummaryComponent,
                    HikeDetailsComponent,
                    HikeFilterPipe], // va comporter tous les components que l'on va créer
    exports:        [HikeListComponent, HikeDetailsComponent], // va exporter les components ainsi que des directives
    providers:      [HikeService] // les services
})

export class HikeModule {
    
}