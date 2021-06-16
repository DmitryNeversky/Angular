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
    public breadcrumbs: Map<string, string> = new Map();

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

    ngDoCheck() {
        this.breadcrumbs.clear();

        let temp = this.router.url.split('/');
        if(temp[0] != undefined)
            temp = temp.splice(2, 2);
        if(temp[1] != undefined) {
            temp[2] = temp[1];
            temp[1] = temp[0] + '/' + temp[1];
        }

        this.breadcrumbs.set(temp[0], temp[0]);
        this.breadcrumbs.set(temp[2], temp[1]);
    }

    @HostListener('window:scroll')
    onScroll() {
        if(window.screen.availWidth > 500) {
            if (window.scrollY > 70) {
                this.openButton.nativeElement.style.top = '69px';
            } else if (window.scrollY < 70) {
                this.openButton.nativeElement.style.top = '96px';
            }
        }
    }
}
