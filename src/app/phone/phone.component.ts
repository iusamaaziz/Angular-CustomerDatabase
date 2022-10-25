import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { objectState } from '../models/objectState';
import { Phone } from '../models/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  @Input() public phn: Phone = new Phone();
  @Output() deleting = new EventEmitter<Phone>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log('PhoneComponent.onDelete()');
    this.phn.objectState = objectState.Deleted;
    this.deleting.emit(this.phn);
  }

  onChanged(){
    if(this.phn.id == 0){
      this.phn.objectState = objectState.Added;
    }
    else{
      this.phn.objectState = objectState.Modified;
    }
  }
}