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
var ProviderService = (function () {
    function ProviderService($http, logger) {
        this.$http = $http;
        this.logger = logger;
        logger.notify("ProviderService created");
    }
    ProviderService.prototype.Get = function (providerId) {
        var base = routes_1.Settings.WebApiBaseUrl;
        var endpoint = "/api/Providers/Get/";
        var route = base + route + providerId;
        var promise = this.$http.get(route);
        return promise;
    };
    ProviderService.prototype.List = function () {
        var _this = this;
        var base = routes_1.Settings.WebApiBaseUrl;
        var endpoint = "/Api/Providers/List/Enabled";
        var route = base + endpoint;
        this.logger.notify("Load :" + route);
        var promise = this.$http.get(route);
        promise.subscribe(function (response) {
            _this.logger.notify("response:");
            _this.logger.notify(response);
        });
        return promise;
    };
    ProviderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_1.Logger])
    ], ProviderService);
    return ProviderService;
})();
exports.ProviderService = ProviderService;
// export class ProviderService {
//     private $http: ng.IHttpService;
// 
//     constructor($http) {
//         this.$http = $http;
//     }
// 
//     public Get(providerId: number): angular.IHttpPromise<Models.IProvider> {
//         var route = "api/Providers/Get/{0}";
//         route = kendo.format(route, providerId);
//         route = kendo.format("{0}/{1}", Settings.WebApiBaseUrl, route);
// 
//         Logger.Notify("route: " + route);
// 
//         var promise = this.$http.get(route);
// 
//         return promise;
//     }
// 
//     public List(): angular.IHttpPromise<Models.IProvider[]> {
//         var route = "Api/Providers/List/Enabled";
//         route = kendo.format("{0}/{1}", Settings.WebApiBaseUrl, route);
// 
//         var promise = this.$http.get(route);
// 
//         return promise;
//     }
// } 
