import {Subcategory} from "./subcategory";

export class Item {
    id:number;
    name:string;
    description:string;
    price:number;
    count:number;
    subCategory: Subcategory;
    images: DataTransferItemList;

    constructor(name: string, description: string, price: number, count: number, subCategory: Subcategory, images: DataTransferItemList) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.subCategory = subCategory;
        this.images = images;
    }
}