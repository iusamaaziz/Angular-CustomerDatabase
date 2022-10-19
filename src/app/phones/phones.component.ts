import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
  
  constructor(private cdr: ChangeDetectorRef, private shared: SharedService) {
    this.shared = shared;
  }

  ngOnInit(): void {
  }

  addPhone() {
    this.phones.push(new Phone());
    this.cdr.detectChanges();
    console.log('PhonesComponent.addPhone()');
  }

  removePhone(phone: Phone){
    console.log('PhonesComponent.removePhone()');
    let index: number = this.phones.findIndex(p => p === phone);
    this.phones.splice(index, 1);
    if(phone.id > 0){
      this.shared.phonesToBeDeleted.push(phone.id);
    }
    this.cdr.detectChanges();
  }

}
