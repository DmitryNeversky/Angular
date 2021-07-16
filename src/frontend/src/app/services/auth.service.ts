import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

    private apiBaseUrl: string = environment.apiBaseUrl;

    constructor(private router: Router,
                private httpClient: HttpClient) {
    }

    private _isAuth: boolean = false;
    private password: string = "k10k-))!k4";

    get isAuth(): boolean {
        return this._isAuth;
    }

    login(password: string) {
        let formData = new FormData();
        formData.append('password', password);

        this.httpClient.post<boolean>(this.apiBaseUrl + '/auth', formData).subscribe(response => {
            if(response)
                this._isAuth = true;
        });
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
