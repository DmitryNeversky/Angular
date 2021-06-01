import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input()
  public sliderSize;

  @Input()
  public displaySize;

  public sliderIndex = 0;
  public position: number = 0;

  constructor() { }

  left(slider: HTMLDivElement) {
    if(this.sliderIndex == 0)
      return

    this.sliderIndex -= 1;
    this.position += 33.333;
    slider.style.transform = `translateX(${this.position}%)`;
  }

  right(slider: HTMLDivElement) {
    if(this.sliderIndex == this.sliderSize - this.displaySize) // ??
      return

    this.sliderIndex += 1;
    this.position -= 33.333;
    slider.style.transform = `translateX(${this.position}%)`;
  }
}
