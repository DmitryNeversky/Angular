import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subcategory} from "../models/subcategory";

@Injectable()
export class SubcategoryService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(`${this.apiBaseUrl}/subcategories/all`);
  }

  public add(formData: FormData): Observable<Subcategory>{
    return this.httpClient.post<Subcategory>(`${this.apiBaseUrl}/subcategories/add`, formData);
  }

  public update(id: number, formData: FormData): Observable<Subcategory>{
    return this.httpClient.put<Subcategory>(`${this.apiBaseUrl}/subcategories/update/${id}`, formData);
  }

  public delete(subcategory: Subcategory): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/subcategories/delete/${subcategory.id}`);
  }
}
