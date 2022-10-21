import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { objectState } from '../models/objectState';
import { Phone } from '../models/phone';
import { SharedService } from '../shared';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent implements OnInit {

  @Input() phones: Phone[] = [];
  @Input() addressId: number = 0;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  addPhone() {
    let phone: Phone = new Phone();
    phone.addressId = this.addressId;
    this.phones.push(phone);
    this.cdr.detectChanges();
    console.log('PhonesComponent.addPhone()');
  }

  removePhone(phone: Phone){
    console.log('PhonesComponent.removePhone()');
    this.cdr.detectChanges();
  }

  filteredPhones(): Phone[] {
    return this.phones.filter(p => p.objectState !== objectState.Deleted);
  }

}
