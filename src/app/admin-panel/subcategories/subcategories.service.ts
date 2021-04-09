import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subcategory} from "./subcategory";

@Injectable()
export class SubcategoriesService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public addSubcategory(subcategory: Subcategory): Observable<Subcategory>{
    return this.httpClient.post<Subcategory>(`${this.apiBaseUrl}/subcategories/add`, subcategory);
  }

  public deleteSubcategory(subcategory: Subcategory): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/subcategories/delete/${subcategory.id}`);
  }

  public getSubcategories(): Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(`${this.apiBaseUrl}/subcategories/all`);
  }

  public updateSubcategory(subcategory: Subcategory): Observable<Subcategory>{
    return this.httpClient.put<Subcategory>(`${this.apiBaseUrl}/subcategories/update`, subcategory);
  }
}
