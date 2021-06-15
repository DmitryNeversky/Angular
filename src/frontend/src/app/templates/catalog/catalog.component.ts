import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

    public loading: boolean = false;

    @ViewChild('openButton')
    private openButton: ElementRef;

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

    @HostListener('window:scroll')
    onScroll() {
        if (window.scrollY > 70) {
            this.openButton.nativeElement.style.top = '69px';
        } else if (window.scrollY < 70) {
            this.openButton.nativeElement.style.top = '96px';
        }
    }
}
