/*
 * http://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
 */
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
var MapPage = (function () {
    function MapPage() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/upcomingMapPage/upcomingMapPage.html',
            providers: [],
            directives: [core_1.ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MapPage);
    return MapPage;
})();
exports.MapPage = MapPage;
