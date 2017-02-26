import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private router: Router) {
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
  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
