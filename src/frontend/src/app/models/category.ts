import {Subcategory} from "./subcategory";

export class Category {
    private _id: number = 0;
    private _name: string = "";
    private _subcategories: Subcategory[] = [];
    private _image: string = "";

    constructor(id: number, name: string, subcategories: Subcategory[], image: string) {
        this._id = id;
        this._name = name;
        this._subcategories = subcategories;
        this._image = image;
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

    get subcategories(): Subcategory[] {
        return this._subcategories;
    }

    set subcategories(value: Subcategory[]) {
        this._subcategories = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}