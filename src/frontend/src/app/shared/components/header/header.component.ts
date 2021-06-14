import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @ViewChild('header')
    private headerElement: ElementRef;

    constructor() {}

    ngOnInit(): void {

    }

    @HostListener('window:scroll')
    onScroll() {
        if (window.scrollY > 70) {
            this.headerElement.nativeElement.style.padding = '1% 0';
        } else if (window.scrollY < 70) {
            this.headerElement.nativeElement.style.padding = '2% 0';
        }
    }

}
