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
var Rx_1 = require('rxjs/Rx');
var customer_1 = require('./customer');
var customer_service_1 = require('./customer.service');
var CustomerNewComponent = (function () {
    function CustomerNewComponent(customerService) {
        this.customerService = customerService;
        this.customer = new customer_1.Customer;
        this.submitted = false;
    }
    CustomerNewComponent.prototype.createCustomer = function (customer) {
        this.submitted = true;
        this.customerService.createCustomer(customer)
            .subscribe(function (data) { return true; }, function (error) {
            console.log("Error saving customer");
            return Rx_1.Observable.throw(error);
        });
    };
    CustomerNewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-new',
            templateUrl: 'customer-new.component.html',
            styleUrls: ['customer-new.component.css'],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomerNewComponent);
    return CustomerNewComponent;
}());
exports.CustomerNewComponent = CustomerNewComponent;
//# sourceMappingURL=customer-new.component.js.map