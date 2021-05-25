import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Subcategory} from "../../../models/subcategory";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SubcategoriesResolver implements Resolve<Subcategory> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subcategory> | Promise<Subcategory> | Subcategory {
        return undefined;
    }

}