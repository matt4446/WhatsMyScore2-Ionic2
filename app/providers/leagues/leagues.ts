import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";

import {Logger} from "../../providers/logger/logger";
import {IProvider} from "../../models/models";
import {Settings} from "../routes/routes";

@Injectable()
export class ProviderService{
    
    
    constructor(private $http: Http, private logger: Logger){
        logger.notify("ProviderService created");
    }
    
    public Get(providerId: number){
        
        var base = Settings.WebApiBaseUrl;
        var endpoint = "/api/Providers/Get/";
        var route = base + route + providerId;
        var promise = this.$http.get(route);
        
        return promise;
    }
 
    public List() {
        var base = Settings.WebApiBaseUrl;
        var endpoint  = "/Api/Providers/List/Enabled";
        var route = base + endpoint;
        
        this.logger.notify("Load :" + route);
        var promise = this.$http.get(route);
        
        promise.subscribe(response => {
            this.logger.notify("response:");
            this.logger.notify(response);
        });
        
        return promise;
    }
}

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