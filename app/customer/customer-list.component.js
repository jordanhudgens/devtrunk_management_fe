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
var Rx_1 = require('rxjs/Rx');
var customer_service_1 = require('./customer.service');
var CustomerListComponent = (function () {
    function CustomerListComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.mode = "Observable";
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 5000);
        timer.subscribe(function () { return _this.getCustomers(); });
    };
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
    };
    CustomerListComponent.prototype.goToShow = function (customer) {
        var link = ['/customer', customer.id];
        this.router.navigate(link);
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-list',
            templateUrl: 'customer-list.component.html',
            styleUrls: ['customer-list.component.css'],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, router_1.Router])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map