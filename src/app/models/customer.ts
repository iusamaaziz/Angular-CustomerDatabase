import { Address } from './address';

export class Customer{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    addresses: Address[];
    
    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.addresses = [
            new Address()
        ];
    }
}