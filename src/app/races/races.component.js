"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
        this.races = [];
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.list().subscribe(function (races) { return _this.races = races; });
    };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'pr-races',
            templateUrl: './races.component.html',
            styleUrls: ['./races.component.css']
        })
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map