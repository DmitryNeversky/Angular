import {Subcategory} from "./subcategory";

export class Category {
    private _id: number = 0;
    private _name: string = "";
    private _subCategories: Subcategory[] = [];

    constructor(name: string) {
        this._name = name;
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

    get subCategories(): Subcategory[] {
        return this._subCategories;
    }

    set subCategories(value: Subcategory[]) {
        this._subCategories = value;
    }
}