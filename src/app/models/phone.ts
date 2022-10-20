export class Phone {
    id: number;
    number: string;
    addressId: number;

    objectState: string;

    constructor() {
        this.id = 0;
        this.number = '';
        this.addressId = 0;

        this.objectState = 'Added';
    }
  }