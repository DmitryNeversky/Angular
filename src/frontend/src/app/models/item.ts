import {Subcategory} from "./subcategory";

export class Item {
    private _id: number = 0;
    private _name: string = "";
    private _description: string = "";
    private _price: number = 0;
    private _count: number = 0;
    private _subcategory: Subcategory;
    private _images: string[] = [];
    private _looks: string[] = [];

    constructor(name: string, subcategory: Subcategory) {
        this._name = name;
        this._subcategory = subcategory;
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

    get subcategory(): Subcategory {
        return <Subcategory>this._subcategory;
    }

    set subcategory(value: Subcategory) {
        this._subcategory = value;
    }

    get images(): string[] {
        return this._images;
    }

    set images(value: string[]) {
        this._images = value;
    }

    get looks(): string[] {
        return this._looks;
    }

    set looks(value: string[]) {
        this._looks = value;
    }
}