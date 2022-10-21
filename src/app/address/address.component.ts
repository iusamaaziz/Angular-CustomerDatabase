import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../models/address';
import { objectState } from '../models/objectState';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() public address: Address = new Address();
  @Output() deleting = new EventEmitter<Address>();
  public states: string[] = [
    'California', 'Florida', 'New York', 'Texas', 'Washington'
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete() {
    console.log('AddressComponent.onDelete()');
    this.address.objectState = objectState.Deleted;
    this.deleting.emit(this.address);
  }

  onModelChanged(){
    this.address.objectState = objectState.Modified;
  }

}
