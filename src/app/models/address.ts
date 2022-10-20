import { Phone } from './phone';

export class Address{
    id: number;
    addressType: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
    customerId: number;

    objectState: string;

    phoneNumbers: Phone[];

    constructor(){
        this.id = 0;
        this.addressType = 'Other';
        this.streetAddress1 = '';
        this.streetAddress2 = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.objectState = 'Added';
        this.customerId = 0;
        this.phoneNumbers = [
            new Phone()
        ];
    }
}