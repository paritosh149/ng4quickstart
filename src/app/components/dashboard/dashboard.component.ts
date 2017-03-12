import { Component, OnInit,Injector } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { AppComponent } from '../app.component';
@Component({
      moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
   // styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService,
                private injector: Injector,
                ) {

    }
    ngOnInit(): void {
        let appComp = this.injector.get(AppComponent) as AppComponent
        appComp.inProgress = true;
        this.heroService.getHeroes().then((heroes) => {
        this.heroes = heroes.slice(0, 5);
        appComp.inProgress=false;
    });
    }
}
