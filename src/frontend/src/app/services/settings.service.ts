import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getHomeCollectionSize(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiBaseUrl}/settings/home-collection-size`);
  }

  public setHomeCollectionSize(size: number): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/settings/home-collection-size`, size);
  }
}
