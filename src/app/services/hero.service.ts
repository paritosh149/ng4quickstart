import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/hero-mock';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        //return Promise.resolve(HEROES);
        return new Promise(resolve =>{
        setTimeout(() => resolve(HEROES), 3000);
    });
    }
}
