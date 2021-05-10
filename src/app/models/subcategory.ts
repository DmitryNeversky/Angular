import {Category} from "./category";
import {Item} from "./item";

export class Subcategory {
    id: number;
    name: string;
    category: Category;
    items: Item[];

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category;
    }
}