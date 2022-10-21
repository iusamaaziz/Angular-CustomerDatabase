import { baseModel } from "./baseModel";
import { objectState } from "./objectState";

export class Phone extends baseModel {
    id: number;
    number: string;
    addressId: number;

    constructor() {
        super()
        this.id = 0;
        this.number = '';
        this.addressId = 0;
    }
  }