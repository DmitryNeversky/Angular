import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Item} from "../../models/item";
import {Observable} from "rxjs";
import {ItemService} from "../../services/item.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ProductResolver implements Resolve<Item> {

    private item: Item = null;

    constructor(private activatedRoute: ActivatedRoute,
                private itemService: ItemService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Promise<Item> | Item {
        return this.itemService.get(+route.paramMap.get('id'));
    }
}