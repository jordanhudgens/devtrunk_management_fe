"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var customer_1 = require('./customer');
var customer_service_1 = require('./customer.service');
var CustomerShowComponent = (function () {
    function CustomerShowComponent(http, customerService, route) {
        this.http = http;
        this.customerService = customerService;
        this.route = route;
    }
    CustomerShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var customerRequest = this.route.params
            .flatMap(function (params) {
            return _this.customerService.getCustomer(+params['id']);
        });
        customerRequest.subscribe(function (response) { return _this.customer = response.json(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', customer_1.Customer)
    ], CustomerShowComponent.prototype, "customer", void 0);
    CustomerShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-show',
            templateUrl: 'customer-show.component.html',
            styleUrls: ['customer-show.component.css'],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, customer_service_1.CustomerService, router_1.ActivatedRoute])
    ], CustomerShowComponent);
    return CustomerShowComponent;
}());
exports.CustomerShowComponent = CustomerShowComponent;
//# sourceMappingURL=customer-show.component.js.map