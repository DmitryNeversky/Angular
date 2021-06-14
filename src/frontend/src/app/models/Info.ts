export class Info {
    private _id: number = 1;
    private _phone: string = "";
    private _whatsapp: string = "";
    private _email: string = "";
    private _address: string = "";

    constructor(id: number, phone: string, whatsapp: string, email: string, address: string) {
        this._id = id;
        this._phone = phone;
        this._whatsapp = whatsapp;
        this._email = email;
        this._address = address;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get whatsapp(): string {
        return this._whatsapp;
    }

    set whatsapp(value: string) {
        this._whatsapp = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}