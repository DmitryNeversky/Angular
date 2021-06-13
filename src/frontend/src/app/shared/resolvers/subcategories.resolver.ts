import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Subcategory} from "../../models/subcategory";
import {CategoryService} from "../../services/category.service";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class SubcategoriesResolver implements Resolve<Subcategory[]> {

    constructor(private categoryService: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subcategory[]> | Promise<Subcategory[]> | Subcategory[] {
        return this.categoryService.getByName(route.params.category).pipe(
            map(category => category.subCategories)
        );
    }
}