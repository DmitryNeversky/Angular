import {Subcategory} from "./subcategory";

export class Item {
    private _id:number = 0;
    private _name:string = "";
    private _description:string = "";
    private _price:number = 0;
    private _count:number = 0;
    private _subCategory: Subcategory;
    private _images: string[] = [];

    constructor(name: string, subCategory: Subcategory) {
        this._name = name;
        this._subCategory = subCategory;
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

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get subCategory(): Subcategory {
        return <Subcategory>this._subCategory;
    }

    set subCategory(value: Subcategory) {
        this._subCategory = value;
    }

    get images(): string[] {
        return this._images;
    }

    set images(value: string[]) {
        this._images = value;
    }
}