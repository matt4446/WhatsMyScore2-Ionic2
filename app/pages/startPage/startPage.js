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
var regionsPage_1 = require("../regionsPage/regionsPage");
var searchCompetitorsPage_1 = require("../searchCompetitorsPage/searchCompetitorsPage");
var upcomingMapPage_1 = require("../upcomingMapPage/upcomingMapPage");
var router_1 = require('angular2/router');
var logger_1 = require("../../providers/logger/logger");
var StartPage = (function () {
    function StartPage(navController, navParams, logger) {
        this.navController = navController;
        this.navParams = navParams;
        this.logger = logger;
    }
    StartPage.prototype.NavigateToProviderList = function () {
        var _this = this;
        this.navController.push(regionsPage_1.RegionsPage, {}, {}, function () {
            _this.logger.notify("push providers page callback");
        });
    };
    StartPage.prototype.NavigateToMapPage = function () {
        var _this = this;
        this.navController.push(upcomingMapPage_1.MapPage, {}, {}, function () {
            _this.logger.notify("push map page callback");
        });
    };
    StartPage.prototype.NavigateToSearchList = function () {
        var _this = this;
        this.navController.push(searchCompetitorsPage_1.SearchCompetitorsPage, {}, {}, function () {
            _this.logger.notify("push search page callback");
        });
    };
    StartPage.prototype.NavigateToCompetitionSearch = function () {
        this.NotAvailable();
        //todo - competition search.
    };
    StartPage.prototype.NavigateToCompetitorSearch = function () {
        this.NotAvailable();
    };
    StartPage.prototype.NotAvailable = function () {
        var alert = ionic_1.Alert.create({
            title: 'Unavailble',
            subTitle: 'I have not made/remade this yet',
            buttons: ['Dismiss']
        });
        this.navController.present(alert);
    };
    StartPage = __decorate([
        ionic_1.Page({
            selector: 'Start',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'build/pages/startPage/startPage.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams, logger_1.Logger])
    ], StartPage);
    return StartPage;
})();
exports.StartPage = StartPage;
//# sourceMappingURL=startPage.js.map