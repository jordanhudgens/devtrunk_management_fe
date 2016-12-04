import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
	moduleId: module.id,
	selector: 'customer-new',
	templateUrl: 'customer-new.component.html',
	styleUrls: ['customer-new.component.css'],
	providers: [ CustomerService ]
})
export class CustomerNewComponent {
	customer = new Customer;
	submitted: boolean = false;

	constructor(
		private customerService: CustomerService
	) {}

	createCustomer(customer) {
		this.submitted = true;
		this.customerService.createCustomer(customer)
				.subscribe(
					data => { return true },
					error => {
						console.log("Error saving customer");
						return Observable.throw(error);
					}
				);
	}
}
