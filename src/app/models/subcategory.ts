import {Category} from "./category";

export class Subcategory {
    id: number;
    name: string;
    category: Category;

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category;
    }
}