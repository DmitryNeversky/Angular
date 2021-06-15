import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {fadeInOutAnimation} from "./animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './styles.css'],
    animations: [fadeInOutAnimation]
})
export class AppComponent implements OnInit {

    ngOnInit(): void {}

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
