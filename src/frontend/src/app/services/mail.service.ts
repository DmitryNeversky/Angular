import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MailService {

    private apiBaseURL = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    send(body: object): Observable<void> {
        return this.httpClient.post<void>(`${this.apiBaseURL}/mail`, body);
    }
}
