import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {InfoService} from "../../services/info.service";
import {Info} from "../../models/Info";

@Injectable({
    providedIn: 'root'
})
export class InfoResolver implements Resolve<Info> {


    constructor(private infoService: InfoService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Info> {
        return this.infoService.get();
    }
}
