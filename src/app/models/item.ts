import {Subcategory} from "./subcategory";

export class Item {
    id:number;
    name:string;
    description:string;
    price:number;
    count:number;
    subCategory: Subcategory;

    constructor(name: string, description: string, price: number, count: number, subCategory: Subcategory) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.subCategory = subCategory;
    }
}