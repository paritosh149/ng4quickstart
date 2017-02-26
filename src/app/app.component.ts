import { Component } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './mocks/hero-mock';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent  {
  title = 'Tour of Heroes';
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
