import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
    moduleId: module.id,
    selector: 'hero-dialog',
    templateUrl: './hero-dialog.component.html',
    providers: [MdDialogConfig]
})
export class HeroDialog implements OnInit{
    @Input()
    hero: Hero;
    constructor(public dialogRef: MdDialogRef<HeroDialog>, public config: MdDialogConfig){
        //this.hero = config.data;
    }
    ngOnInit(){
        this.hero = this.dialogRef.componentInstance.hero;
        //this.hero = this.config.data;
    }
}