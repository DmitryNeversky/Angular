import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../models/item";
import {Observable} from "rxjs";

@Injectable()
export class ItemsService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) {}

  public getItems(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.apiBaseUrl}/items/all`);
  }

  public addItem(formData: FormData): Observable<Item>{
    return this.httpClient.post<Item>(`${this.apiBaseUrl}/items/add`, formData);
  }

  public updateItem(id: number, formData: FormData): Observable<Item>{
    console.log(id);
    return this.httpClient.put<Item>(`${this.apiBaseUrl}/items/update/${id}`, formData)
  }

  public deleteItem(itemId:number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/items/delete/${itemId}`)
  }
}
