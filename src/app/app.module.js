"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./components/app-routing.module");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var heroes_component_1 = require("./components/heroes/heroes.component");
var hero_detail_component_1 = require("./components/hero-detail/hero-detail.component");
var app_component_1 = require("./components/app.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var hero_service_1 = require("./services/hero.service");
var material_1 = require("@angular/material");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var hero_dialog_component_1 = require("./components/hero-dialog/hero-dialog.component");
require("hammerjs");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            material_1.MaterialModule.forRoot(),
            animations_1.BrowserAnimationsModule,
        ],
        declarations: [heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_dialog_component_1.HeroDialog
        ],
        bootstrap: [app_component_1.AppComponent,
        ],
        providers: [hero_service_1.HeroService],
        entryComponents: [
            hero_dialog_component_1.HeroDialog
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map