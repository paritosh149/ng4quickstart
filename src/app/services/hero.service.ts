import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/hero-mock';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => {
        setTimeout(() => resolve(HEROES), 0);
    });
}
getHero(id: number): Promise<Hero> {
    return this.getHeroes().then((heroes) => heroes.find(hero => hero.id === id));
}
}
