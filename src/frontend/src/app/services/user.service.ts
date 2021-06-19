import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/User";
import {Item} from "../models/item";

@Injectable({providedIn: "root"})
export class UserService {

    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {}

    public getCurrentUser(): Observable<User> {
        return this.httpClient.get<User>(`${this.apiBaseUrl}/users/current`);
    }

    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.apiBaseUrl}/users`);
    }

    public addWish(ip: string, item: Item): Observable<User> {
        let formData = new FormData();
        formData.append("ip", ip);
        formData.append("item", item.id.toString());
        return this.httpClient.post<User>(`${this.apiBaseUrl}/users/add_wish`, formData);
    }

    public removeWish(ip: string, item: Item): Observable<void> {
        let formData = new FormData();
        formData.append("ip", ip);
        formData.append("item", item.id.toString());
        return this.httpClient.post<void>(`${this.apiBaseUrl}/users/delete_wish`, formData);
    }
}