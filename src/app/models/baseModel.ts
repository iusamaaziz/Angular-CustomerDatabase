import { objectState } from "./objectState";

export class baseModel{
    objectState: objectState;

    constructor(){
        this.objectState = objectState.Added;
    }
}