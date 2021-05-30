import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class UserService {

    private userIp = '';

    constructor(private httpClient: HttpClient) {}

    public getIP(): any {
        this.httpClient.get<any>('https://jsonip.com').subscribe((response: any) => {
            return response.ip
        }, error => console.log(error));
    }
}