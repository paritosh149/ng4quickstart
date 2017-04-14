"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("../../services/hero.service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var hero_dialog_component_1 = require("../hero-dialog/hero-dialog.component");
var app_component_1 = require("../app.component");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router, dialog, injector) {
        this.heroService = heroService;
        this.router = router;
        this.dialog = dialog;
        this.injector = injector;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        var appComp = this.injector.get(app_component_1.AppComponent);
        appComp.inProgress = true;
        this.heroService.getHeroes().then(function (data) {
            _this.heroes = data;
            appComp.inProgress = false;
        });
    };
    HeroesComponent.prototype.selectHero = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.openDialog = function (hero) {
        var _this = this;
        this.selectHero(hero);
        var config = new material_1.MdDialogConfig();
        config.data = this.selectedHero;
        var dialogRef = this.dialog.open(hero_dialog_component_1.HeroDialog, config);
        //dialogRef.componentInstance.hero = this.selectedHero;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'details')
                _this.gotoDetails();
        });
    };
    HeroesComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        //styleUrls: ['./heroes.component.css'],
        providers: [hero_service_1.HeroService, material_1.MdDialogConfig]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router,
        material_1.MdDialog,
        core_1.Injector])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map