import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerNewComponent } from './customer/customer-new.component';
import { CustomerShowComponent } from './customer/customer-show.component';
import { CustomerService } from './customer/customer.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule.forRoot(),
		HttpModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerShowComponent
	],
	providers: [
    CustomerService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
