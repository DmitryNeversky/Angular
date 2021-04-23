import {Subcategory} from "./subcategory";

export class Item {
    id:number;
    name:string;
    description:string;
    price:number;
    count:number;
    subCategory: Subcategory;
    images: string[];

    constructor() {
    }
}