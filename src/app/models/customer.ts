import { Address } from './address';
import { baseModel } from './baseModel';

export class Customer extends baseModel{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    addresses: Address[];

    constructor() {
        super()
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.addresses = [
            new Address()
        ];
    }
}