import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private apiBaseUrl: string = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) { }
  
  public getHomeCollection(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/home_collection`);
  }
  
  public setHomeCollection(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/home_collection`, formData);
  }

  public getPopularSize(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiBaseUrl}/home_popular_size`);
  }

  public setPopularSize(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/home_popular_size`, formData);
  }

  public getPhone(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseUrl}/phone`);
  }

  public setPhone(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/phone`, formData);
  }

  public getAddress(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseUrl}/address`);
  }

  public setAddress(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/address`, formData);
  }

  public getEmail(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseUrl}/email`);
  }

  public setEmail(formData: FormData): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/email`, formData);
  }
}