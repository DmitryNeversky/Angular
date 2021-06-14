import {Component} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

    public loading: boolean = false;

    public icons = {menu: faBars}

    constructor(private router: Router) {
        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.loading = true;
            }
            if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError)
                this.loading = false;
        });
    }
}
