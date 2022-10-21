import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';
import { objectState } from '../models/objectState';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer: Customer = new Customer();
  public confirmEmailAddr: string = '';
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  searchCustomer(){
    this.customerService.getCustomer(this.customer.firstName, this.customer.lastName).subscribe(
      (data: Customer) => {
        this.customer = { ...data };
        console.log(this.customer);
      }, (err: HttpErrorResponse) => {
        alert('User with first name: ' + this.customer.firstName + ' and last name: ' + this.customer.lastName + ' does not exist.');
      }
    );
  }

  onChanged(){
    this.customer.objectState = objectState.Modified;
  }

  saveCustomer() {
    this.customerService.upsertCustomer(this.customer);
    
  }
}
