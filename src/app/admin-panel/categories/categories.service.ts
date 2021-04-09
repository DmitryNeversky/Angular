import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";


@Injectable()
export class CategoriesService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public addCategory(category: Category): Observable<Category>{
    return this.httpClient.post<Category>(`${this.apiBaseUrl}/categories/add`, category);
  }

  public deleteCategory(category: Category): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/categories/delete/${category.id}`);
  }

  public getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/categories/all`);
  }

  public updateCategory(category: Category): Observable<Category>{
    return this.httpClient.put<Category>(`${this.apiBaseUrl}/categories/update`, category);
  }
}
