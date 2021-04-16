import {Subcategory} from "./subcategory";

export class Category {
    id: number;
    name: string;
    subCategories: Subcategory[];

    constructor(name: string) {
        this.name = name;
    }
}