import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './components/app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesComponent }  from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';
import { MaterialModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HeroDialog } from './components/hero-dialog/hero-dialog.component';

import 'hammerjs';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  AppRoutingModule, 
                  HttpModule, 
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  MaterialModule.forRoot(),
                  BrowserAnimationsModule,
                ],
  declarations: [ HeroesComponent, 
                  HeroDetailComponent, 
                  AppComponent, 
                  DashboardComponent,
                  HeroDialog,
                ],
  bootstrap:    [ AppComponent,
                  
                ],
  providers:    [ HeroService ],
  entryComponents: [
                  HeroDialog
                ],
})
export class AppModule { }
