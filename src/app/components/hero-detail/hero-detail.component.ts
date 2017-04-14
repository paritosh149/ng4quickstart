import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
      moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    //styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    @Input()
    isDisabled: boolean;
    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) =>
            {
                if(params.id !== undefined)
                    return this.heroService.getHero(+params['id']);
                else
                    return Array();
            }
    ).subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
    save(){
        this.heroService.save(this.hero).then(() => this.location.back());
    }
}
