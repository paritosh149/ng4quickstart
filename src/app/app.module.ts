import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './components/app-routing.module';

import { HeroesComponent }  from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ HeroesComponent, HeroDetailComponent, AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ],
})
export class AppModule { }
