import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { ContactUsComponent } from './contact/contact-us.component';

@NgModule({
  declarations: [ AppComponent,
                  PageNotFoundComponent
                ],
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  HikeModule, 
                  HomeModule,
                  ContactModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent },
                    { path: 'hike/:id', component: HikeDetailsComponent },
                    { path: 'contact', component: ContactUsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: PageNotFoundComponent }
                  ])
                ], // .forRoot() Méthode statique qui prends en param un tableau et qui va nous permettre de déclarer nos routes
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
