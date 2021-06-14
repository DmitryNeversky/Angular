import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appClick180]'
})
export class Click180Directive {

    private clicked: boolean = false;

    constructor(private el: ElementRef) {
    }

    @HostListener('click') onMouseClick() {
        if (!this.clicked)
            this.el.nativeElement.style.transform = 'rotateX(180deg)';
        else
            this.el.nativeElement.style.transform = 'rotateX(0deg)';

        this.clicked = !this.clicked;
    }

}
