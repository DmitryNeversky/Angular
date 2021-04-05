import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../entities/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) {}

  public getItems(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.apiBaseUrl}/item/all`);
  }

  public addItem(item:Item): Observable<Item>{
    return this.httpClient.post<Item>(`${this.apiBaseUrl}/item/add`, item);
  }

  public updateItem(item:Item): Observable<Item>{
    console.log(item);
    return this.httpClient.put<Item>(`${this.apiBaseUrl}/item/update`, item)
  }

  public deleteItem(itemId:number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/item/delete-${itemId}`)
  }
}
