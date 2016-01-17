var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require("angular2/http");
var logger_1 = require("../../providers/logger/logger");
var routes_1 = require("../routes/routes");
var CompetitionService = (function () {
    function CompetitionService($http, logger) {
        this.$http = $http;
        this.logger = logger;
        logger.notify("ProviderService created");
    }
    CompetitionService.prototype.List = function (providerId) {
        var base = routes_1.Settings.WebApiBaseUrl;
        var endpoint = "/Api/Providers/{0}/Competitions/Enabled".replace("{0}", providerId);
        var route = base + endpoint;
        this.logger.notify("Load :" + route);
        var promise = this.$http.get(route);
        this.logger.notifyResponse(promise);
        return promise;
    };
    CompetitionService.prototype.Get = function (competitionId) {
        var base = routes_1.Settings.WebApiBaseUrl;
        var endpoint = "/Api/Competition/{0}".replace("{0}", competitionId);
        var route = base + endpoint;
        this.logger.notify("Load :" + route);
        var promise = this.$http.get(route);
        return promise;
        //         var route = kendo.format("Api/Competition/{0}", competitionId);
        //             route = kendo.format("{0}/{1}", Settings.WebApiBaseUrl, route);
        // 
        //             var promise = this.$http.get(route);
        // 
        //             return promise;
    };
    CompetitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_1.Logger])
    ], CompetitionService);
    return CompetitionService;
})();
exports.CompetitionService = CompetitionService;
//# sourceMappingURL=competitions.js.map