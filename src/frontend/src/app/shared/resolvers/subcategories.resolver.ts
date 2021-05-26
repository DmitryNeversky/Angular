import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {SubcategoryService} from "../../services/subcategory.service";
import {Subcategory} from "../../models/subcategory";

@Injectable({providedIn: "root"})
export class SubcategoriesResolver implements Resolve<Subcategory[]> {

    constructor(private subCategoryService: SubcategoryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subcategory[]> | Promise<Subcategory[]> | Subcategory[] {
        return this.subCategoryService.getAll();
    }
}