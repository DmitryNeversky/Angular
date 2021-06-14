import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent {

    @Input()
    public type: number = 1;

    constructor() {}
}
