import { Component, OnInit, Injector } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { HeroDialog } from '../hero-dialog/hero-dialog.component';
import { AppComponent } from '../app.component';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  //styleUrls: ['./heroes.component.css'],
  providers: [HeroService, MdDialogConfig]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private router: Router,
              public dialog: MdDialog,
              private injector: Injector,
              ) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
        let appComp = this.injector.get(AppComponent) as AppComponent;
        appComp.inProgress=true;
        this.heroService.getHeroes().then((data) =>
        {
          this.heroes =  data;
          appComp.inProgress=false;
        });
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  openDialog(hero: Hero){
    this.selectHero(hero);
    let config = new MdDialogConfig();
    config.data = this.selectedHero;
    let dialogRef = this.dialog.open(HeroDialog, config);
    dialogRef.componentInstance.hero = this.selectedHero;
    dialogRef.afterClosed().subscribe(result => {
      if(result==='details')
        this.gotoDetails();
    });
  }
  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
