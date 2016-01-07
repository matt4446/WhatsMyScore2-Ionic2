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
var providersListPage_1 = require("../providersListPage/providersListPage");
var searchCompetitorsPage_1 = require("../searchCompetitorsPage/searchCompetitorsPage");
var logger_1 = require("../../providers/logger/logger");
var StartPage = (function () {
    function StartPage(navController, navParams, logger) {
        this.navController = navController;
        this.navParams = navParams;
        this.logger = logger;
    }
    StartPage.prototype.NavigateToProviderList = function () {
        var _this = this;
        this.navController.push(providersListPage_1.ProvidersListPage, {}, {}, function () {
            _this.logger.notify("push providers page callback");
        });
    };
    StartPage.prototype.NavigateToSearchList = function () {
        var _this = this;
        this.navController.push(searchCompetitorsPage_1.SearchCompetitorsPage, {}, {}, function () {
            _this.logger.notify("push search page callback");
        });
    };
    StartPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/startPage/startPage.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams, logger_1.Logger])
    ], StartPage);
    return StartPage;
})();
exports.StartPage = StartPage;
