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
var startPage_1 = require('./pages/startPage/startPage');
var providersListPage_1 = require('./pages/providersListPage/providersListPage');
var searchCompetitorsPage_1 = require('./pages/searchCompetitorsPage/searchCompetitorsPage');
var logger_1 = require('./providers/logger/logger');
var MyApp = (function () {
    function MyApp(app, platform, logger) {
        this.app = app;
        this.platform = platform;
        this.logger = logger;
        this.startPage = startPage_1.StartPage;
        this.providersPage = providersListPage_1.ProvidersListPage;
        //var logger = new Logger();
        this.logger.notify("starting");
        this.pages = [
            {
                title: "Providers",
                page: providersListPage_1.ProvidersListPage
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
            providers: [logger_1.Logger]
        }), 
        __metadata('design:paramtypes', [ionic_1.IonicApp, ionic_1.Platform, logger_1.Logger])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
