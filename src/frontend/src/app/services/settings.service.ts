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
    return this.httpClient.get<number>(`${this.apiBaseUrl}/settings/collection_category_size`);
  }

  public setHomeCollectionSize(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/settings/collection_category_size`, formData);
  }

  public getPopularItemSize(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiBaseUrl}/settings/popular_item_size`);
  }

  public setPopularItemSize(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/settings/popular_item_size`, formData);
  }
}
