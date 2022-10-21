import { baseModel } from './baseModel';
import { objectState } from './objectState';
import { Phone } from './phone';

export class Address extends baseModel {
    id: number;
    addressType: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
    customerId: number;

    phoneNumbers: Phone[];

    constructor(){
        super()
        this.id = 0;
        this.addressType = 'Other';
        this.streetAddress1 = '';
        this.streetAddress2 = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.customerId = 0;
        this.phoneNumbers = [
            new Phone()
        ];
    }
}