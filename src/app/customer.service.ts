import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Customer } from './models/customer';
import { Observable } from 'rxjs';
import { SharedService } from './shared';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private base_url = 'https://localhost:7243/api';
  constructor(private http: HttpClient, private shared: SharedService) { }

  getCustomer(firstName: string, lastName: string): Observable<Customer> {
    console.log('CustomerService.getCustomer()');
    let customer = this.http.get<Customer>(this.base_url + '/customers/search/' + firstName + '/' + lastName, 
    {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    } );
    return customer;
  }

  upsertCustomer(customer: Customer) {
    console.log('CustomerService.upsertCustomer()');
    console.log(customer);

    return this.http.post<Customer>(this.base_url + '/customers', customer).subscribe((res) => {
      console.log(res);
      alert('Customer saved successfully.');
    },(err:HttpErrorResponse)=>{console.error(err.message);});
  }
}
