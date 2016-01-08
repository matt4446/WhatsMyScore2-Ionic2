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
var logger_1 = require("../../providers/logger/logger");
var ProvidersListPage = (function () {
    function ProvidersListPage(logger, providerService) {
        var _this = this;
        this.logger = logger;
        this.providerService = providerService;
        providerService.List()
            .subscribe(function (response) {
            var items = response.json();
            _this.logger.notify("items");
            _this.logger.notify(items);
            _this.items = items;
        });
    }
    ProvidersListPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/providersListPage/providersListPage.html',
            providers: [leagues_1.ProviderService]
        }), 
        __metadata('design:paramtypes', [logger_1.Logger, leagues_1.ProviderService])
    ], ProvidersListPage);
    return ProvidersListPage;
})();
exports.ProvidersListPage = ProvidersListPage;
