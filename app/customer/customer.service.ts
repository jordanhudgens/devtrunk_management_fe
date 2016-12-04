import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Customer } from './customer';

@Injectable()
export class CustomerService {
	private customerUrl = 'https://devtrunk-customer-api.herokuapp.com/customers';

	constructor(
		private http: Http
	) {}

	getCustomers(): Observable<Customer[]> {
		return this.http.get(this.customerUrl)
										.map((response: Response) => <Customer[]>response.json())
										.catch(this.handleError);
	}

  getCustomer(id: number) {
    return this.http.get(this.customerUrl + "/" + id + '.json');
  }

  createCustomer(customer) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.customerUrl, JSON.stringify(customer), { headers: headers}).map((res: Response) => res.json());
  }

	private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
