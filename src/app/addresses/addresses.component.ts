import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Address } from '../models/address';
import { objectState } from '../models/objectState';
import { SharedService } from '../shared';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesComponent implements OnInit {

  @Input() public addresses: Address[] = [];
  @Input() public customerId: number = 0;
  constructor(private cdr: ChangeDetectorRef, private shared: SharedService) { }

  ngOnInit(): void {
  }

  addAddress() {
    let address: Address = new Address();
    address.customerId = this.customerId;
    this.addresses.push(address);
    this.cdr.detectChanges();
    console.log('AddressesComponent.addAddress()');
  }

  deleteAddress(address: Address) {
    console.log('AddressesComponent.deleteAddress()');
    this.cdr.detectChanges();
  }

  filteredAddresses(): Address[] {
    return this.addresses.filter(a => a.objectState !== objectState.Deleted);
  }

}
