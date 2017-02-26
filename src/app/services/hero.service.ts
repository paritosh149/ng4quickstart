import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    constructor(private http: Http) {}
    getHeroes(): Promise<Hero[]> {
        /*return new Promise(resolve => {
        setTimeout(() => resolve(HEROES), 0);
    });*/
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
}
private handleError(error: any) {
    console.error('Error: ' + error);
    return Promise.reject(error.message || error);
}
/*getHero(id: number): Promise<Hero> {
    return this.getHeroes().then((heroes) => heroes.find(hero => hero.id === id));
}*/
getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
}

}
