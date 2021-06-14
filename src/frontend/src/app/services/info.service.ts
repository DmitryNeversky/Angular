import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Info} from "../models/Info";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InfoService {

    private apiBaseURL: string = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public get(): Observable<Info> {

        return this.httpClient.get<Info>(`${this.apiBaseURL}/info`);
    }

    public post(info: Info): Observable<void> {

        return this.httpClient.post<void>(`${this.apiBaseURL}/info`, info);
    }
}
