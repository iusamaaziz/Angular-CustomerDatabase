import { Address } from './models/address';
import { Phone } from './models/phone';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  addressesToBeDeleted: number[] = [];
  phonesToBeDeleted: number[] = [];
}