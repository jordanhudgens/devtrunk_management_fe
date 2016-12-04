import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
	moduleId: module.id,
	selector: 'customer-show',
	templateUrl: 'customer-show.component.html',
	styleUrls: ['customer-show.component.css'],
	providers: [ CustomerService ]
})
export class CustomerShowComponent implements OnInit {
	constructor(
		private http: Http,
		private customerService: CustomerService,
		private route: ActivatedRoute
	) {}

	@Input()
	customer: Customer;

	ngOnInit(): void {
		let customerRequest = this.route.params
				.flatMap((params: Params) =>
					this.customerService.getCustomer(+params['id']));
		customerRequest.subscribe(response => this.customer = response.json()); }
}
