import {Category} from "./category";
import {Item} from "./item";

export class Subcategory {
    private _id: number = 0;
    private _name: string = "";
    private _category: Category;
    private _items: Item[] = [];

    constructor(name: string, category: Category) {
        this._name = name;
        this._category = category;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get category(): Category | undefined {
        return this._category;
    }

    set category(value: Category | undefined) {
        this._category = <Category>value;
    }

    get items(): Item[] {
        return this._items;
    }

    set items(value: Item[]) {
        this._items = value;
    }
}