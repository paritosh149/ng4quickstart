import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ HeroesComponent, HeroDetailComponent, AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ],
})
export class AppModule { }
