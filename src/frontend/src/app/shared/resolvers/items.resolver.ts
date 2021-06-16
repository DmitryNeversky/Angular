import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Item} from "../../models/item";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {SubcategoryService} from "../../services/subcategory.service";

@Injectable({providedIn: "root"})
export class ItemsResolver implements Resolve<Item[]> {

    constructor(private subcategoryService: SubcategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> | Promise<Item[]> | Item[] {
        return this.subcategoryService.getByName(route.params.subcategory).pipe(
            map(subcategory => subcategory.items)
        );
    }
}