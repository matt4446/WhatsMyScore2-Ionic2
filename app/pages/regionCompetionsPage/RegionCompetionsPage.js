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
var leagues_1 = require("../../providers/leagues/leagues");
var competitions_1 = require("../../providers/leagues/competitions");
var logger_1 = require("../../providers/logger/logger");
var Rx_1 = require('rxjs/Rx');
var router_1 = require('angular2/router');
var RegionCompetionsPage = (function () {
    function RegionCompetionsPage(logger, navController, navParams, providerService, competitionService) {
        var _this = this;
        this.logger = logger;
        this.navController = navController;
        this.navParams = navParams;
        this.providerService = providerService;
        this.competitionService = competitionService;
        this.logger.notify("params:");
        this.logger.notify(navParams);
        this.searchTerm = "";
        this.searchSubject = new Rx_1.BehaviorSubject("");
        //this.searchItems = "";
        //throttle the input to avoid 
        this.searchActioner = this.searchSubject
            .filter(function (x) {
            _this.logger.notify("all items");
            var t = typeof (_this.allItems);
            return t !== "undefined";
        })
            .subscribe(function (x) {
            _this.logger.notify("search by: " + x);
            _this.items = _this.allItems.filter(function (e) {
                return e.Name.toLowerCase().indexOf(x) >= 0;
            });
        });
    }
    RegionCompetionsPage.prototype.StartDate = function (item) {
        var startDate = kendo.parseDate(item.StartDateTimeUtc);
        kendo.toString(startDate, "G");
    };
    RegionCompetionsPage.prototype.onPageWillEnter = function () {
        var _this = this;
        var regionId = this.navParams.get("id");
        var providerPromise = this.providerService.Get(regionId);
        this.competitionService.List(regionId)
            .map(function (response) { return response.json(); })
            .subscribe(function (items) {
            _this.allItems = items;
            if (_this.searchTerm.length > 0) {
                _this.items = _this.allItems.filter(function (e) {
                    return e.Name.toLowerCase().indexOf(_this.searchTerm) >= 0;
                });
            }
            else {
                _this.items = _this.allItems;
            }
        });
    };
    RegionCompetionsPage.prototype.update = function (searchBar) {
        this.searchTerm = searchBar.value ? searchBar.value : "";
        ;
        this.logger.notify("search update: " + this.searchTerm);
        this.searchSubject.next(this.searchTerm);
    };
    RegionCompetionsPage.prototype.ngOnDestroy = function () {
        //clear subscribers etc
        this.logger.notify("Kill Competition List Page");
        //this.searchActioner.unsubscribe();
    };
    RegionCompetionsPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/regionCompetionsPage/regionCompetionsPage.html',
            providers: [leagues_1.ProviderService, competitions_1.CompetitionService, router_1.ROUTER_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [logger_1.Logger, ionic_1.NavController, ionic_1.NavParams, leagues_1.ProviderService, competitions_1.CompetitionService])
    ], RegionCompetionsPage);
    return RegionCompetionsPage;
})();
exports.RegionCompetionsPage = RegionCompetionsPage;
//# sourceMappingURL=RegionCompetionsPage.js.map