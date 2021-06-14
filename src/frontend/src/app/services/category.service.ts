import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";


@Injectable()
export class CategoryService {
    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/categories/all`);
    }

    public getByName(name: string): Observable<Category> {
        return this.httpClient.get<Category>(`${this.apiBaseUrl}/categories/${name}`);
    }

    public add(formData: FormData): Observable<Category> {
        return this.httpClient.post<Category>(`${this.apiBaseUrl}/categories/add`, formData);
    }

    public update(id: number, formData: FormData): Observable<Category> {
        return this.httpClient.put<Category>(`${this.apiBaseUrl}/categories/update/${id}`, formData);
    }

    public delete(category: Category): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiBaseUrl}/categories/delete/${category.id}`);
    }

    public setHomeCollection(formData: FormData) {
        this.httpClient.post<void>(`${this.apiBaseUrl}/home/collection`, formData).subscribe();
    }

    public getHomeCollection(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/home/collection`);
    }
}