var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic-framework/ionic');
var core_1 = require('angular2-google-maps/core');
//router 
var router_1 = require('angular2/router');
//pages 
var startPage_1 = require('./pages/startPage/startPage');
var regionsPage_1 = require('./pages/regionsPage/regionsPage');
var upcomingMapPage_1 = require("./pages/upcomingMapPage/upcomingMapPage");
var searchCompetitorsPage_1 = require('./pages/searchCompetitorsPage/searchCompetitorsPage');
var logger_1 = require('./providers/logger/logger');
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
var MyApp = (function () {
    function MyApp(app, config, platform, logger) {
        this.app = app;
        this.config = config;
        this.platform = platform;
        this.logger = logger;
        this.startPage = startPage_1.StartPage;
        this.providersPage = regionsPage_1.RegionsPage;
        //var logger = new Logger();
        this.logger.notify("starting");
        this.pages = [
            {
                title: "Providers",
                page: regionsPage_1.RegionsPage
            },
            {
                title: "Search",
                page: searchCompetitorsPage_1.SearchCompetitorsPage
            }
        ];
        this.root = startPage_1.StartPage;
        platform.ready().then(function () {
            logger.notify("ready-started");
            // Do any necessary cordova or native calls here now that the platform is ready
        });
    }
    MyApp = __decorate([
        ionic_1.App({
            templateUrl: 'build/app.html',
            providers: [logger_1.Logger, core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: startPage_1.StartPage, name: 'Start' },
            { path: '/Regions', component: regionsPage_1.RegionsPage, name: 'Regions' },
            { path: '/UpcomingCompetitionMap', component: upcomingMapPage_1.MapPage, name: "UpcomingCompetitionMap" }
        ]), 
        __metadata('design:paramtypes', [ionic_1.IonicApp, ionic_1.Config, ionic_1.Platform, logger_1.Logger])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
//# sourceMappingURL=app.js.map