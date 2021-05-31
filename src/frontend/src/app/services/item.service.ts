import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../models/item";
import {Observable} from "rxjs";

@Injectable()
export class ItemService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) {}

  public getAll(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.apiBaseUrl}/items/all`);
  }

  public get(id: number): Observable<Item>{
    return this.httpClient.get<Item>(`${this.apiBaseUrl}/items/${id}`);
  }

  public add(formData: FormData): Observable<Item>{
    return this.httpClient.post<Item>(`${this.apiBaseUrl}/items/add`, formData);
  }

  public update(id: number, formData: FormData): Observable<Item>{
    return this.httpClient.put<Item>(`${this.apiBaseUrl}/items/update/${id}`, formData)
  }

  public delete(itemId:number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiBaseUrl}/items/delete/${itemId}`)
  }

  public addLook(formData: FormData): void {
    this.httpClient.post<void>(`${this.apiBaseUrl}/items/add_look`, formData).subscribe();
  }
}
