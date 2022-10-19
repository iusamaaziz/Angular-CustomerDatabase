import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Address } from '../models/address';
import { SharedService } from '../shared';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesComponent implements OnInit {

  @Input() public addresses: Address[] = [];

  constructor(private cdr: ChangeDetectorRef, private shared: SharedService) { }

  ngOnInit(): void {
  }

  addAddress() {
    this.addresses.push(new Address());
    this.cdr.detectChanges();
    console.log('AddressesComponent.addAddress()');
  }

  deleteAddress(address: Address) {
    console.log('AddressesComponent.deleteAddress()');
    let index: number = this.addresses.findIndex(a => a === address);
    this.addresses.splice(index, 1);
    if(address.id > 0){
      this.shared.addressesToBeDeleted.push(address.id);
    }
    this.cdr.detectChanges();
  }

}
