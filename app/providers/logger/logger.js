var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {bind, Inject} from 'angular2/di';
//import {Component, NgFor} from 'angular2/angular2';
var core_1 = require('angular2/core');
var Logger = (function () {
    function Logger() {
        this.weWillNotify = true;
    }
    Logger.prototype.notify = function (message) {
        if (this.weWillNotify) {
            console.log(message);
        }
    };
    Logger.prototype.notifyResponse = function (requestObservable) {
        var _this = this;
        var subscription = requestObservable.subscribe(function (response) {
            _this.notify("response:");
            _this.notify(response);
        });
    };
    Logger = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Logger);
    return Logger;
})();
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map