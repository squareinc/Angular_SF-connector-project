"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var LoginService = (function () {
    function LoginService(http) {
        this._http = http;
    }
    LoginService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
    };
    LoginService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || ' error');
    };
    LoginService.prototype.validateUser = function (body) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var content = JSON.stringify(body);
        var reqOpt = new http_1.RequestOptions({ headers: headers });
        return this._http.post('/api/Connector', content, { headers: headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    LoginService.prototype.getAdmin = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('/api/Connector/GetAdmin?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LoginService = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
