"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var backendless_setup_1 = require('../utils/backendless_setup');
var BackendlessapiService = (function () {
    function BackendlessapiService(http) {
        this.http = http;
    }
    BackendlessapiService.prototype.getData = function () {
        var headers = new http_1.Headers();
        headers.append("application-id", backendless_setup_1.BackEndlessSetup.APP_ID);
        headers.append("secret-key", backendless_setup_1.BackEndlessSetup.REST_KEY);
        headers.append("application-type", "REST");
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(backendless_setup_1.BackEndlessSetup.DATA_URL + "Catalog?pageSize=30&sortBy=created%20desc", options)
            .map(function (response) { return response.json(); });
    };
    BackendlessapiService = __decorate([
        core_1.Injectable()
    ], BackendlessapiService);
    return BackendlessapiService;
}());
exports.BackendlessapiService = BackendlessapiService;
