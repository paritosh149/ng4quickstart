import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
        this.heroService.getHeroes().then((data) =>
        {
          this.heroes =  data;
        });
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
