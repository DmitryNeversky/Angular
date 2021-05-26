import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Item} from "../../models/item";
import {Observable} from "rxjs";
import {ItemService} from "../../services/item.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ItemsResolver implements Resolve<Item[]> {

    constructor(private itemService: ItemService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> | Promise<Item[]> | Item[] {
        return this.itemService.getAll();
    }
}