import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    constructor(private router: Router) {
    }

    private _isAuth: boolean = true;
    private password: string = "1001";

    get isAuth(): boolean {
        return this._isAuth;
    }

    login(password: string) {
        if (password == this.password)
            this._isAuth = true
    }

    logout() {
        this._isAuth = false;
        this.router.navigate(['/']);
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(this._isAuth);
        });
    }
}
