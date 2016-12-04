import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
	moduleId: module.id,
	selector: 'customer-list',
	templateUrl: 'customer-list.component.html',
	styleUrls: ['customer-list.component.css'],
	providers: [ CustomerService ]
})
export class CustomerListComponent implements OnInit {
	customers: Customer[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private customerService: CustomerService,
		private router: Router
	) {}

	ngOnInit() {
		let timer = Observable.timer(0, 5000);
		timer.subscribe(() => this.getCustomers());
	}

	getCustomers() {
		this.customerService.getCustomers()
				.subscribe(
					customers => this.customers = customers,
					error => this.errorMessage = <any>error
				);
	}

	goToShow(customer: Customer): void {
		let link = ['/customer', customer.id];
		this.router.navigate(link);
	}
}
