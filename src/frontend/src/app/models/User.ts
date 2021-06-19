import {Item} from "./item";

export class User {
    private _ip: string;
    private _wishList: Item[];

    constructor(ip: string) {
        this._ip = ip;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }

    get wishList(): Item[] {
        return this._wishList;
    }
}