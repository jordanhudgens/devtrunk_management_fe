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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var homepage_component_1 = require('./homepage/homepage.component');
var customer_list_component_1 = require('./customer/customer-list.component');
var customer_new_component_1 = require('./customer/customer-new.component');
var customer_show_component_1 = require('./customer/customer-show.component');
var customer_service_1 = require('./customer/customer.service');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                customer_list_component_1.CustomerListComponent,
                customer_new_component_1.CustomerNewComponent,
                customer_show_component_1.CustomerShowComponent
            ],
            providers: [
                customer_service_1.CustomerService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map