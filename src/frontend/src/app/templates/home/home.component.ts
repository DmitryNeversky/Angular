import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";
import {MetaService} from "../../services/meta.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeCollection: Category[];
  public popularItems: Item[];

  constructor(private categoryService: CategoryService,
              private itemService: ItemService,
              private metaService: MetaService) {}

  ngOnInit() {
    this.initHomeCollection();
    this.initPopularItems();
  }

  initHomeCollection(){
    this.metaService.getHomeCollection().subscribe((response => {
      this.homeCollection = response;
      this.sliderIndex = 0;
    }));
  }

  initPopularItems(){
    this.itemService.getAll().subscribe((response: Item[]) => {
      if(response.length > 0) {
        this.popularItems = response.sort((a, b) => {
          if (a.looks > b.looks)
            return -1
          else if (a.looks < b.looks)
            return 1
          else
            return 0
        });
        this.metaService.getPopularSize().subscribe(size => {
          if(response.length > 3) this.popularItems.length = size;
        }, error => console.log(error));
      }
    })
  }

  public sliderIndex;
  private position: number = 0;

  left(slider: HTMLDivElement) {
    if(this.sliderIndex == 0)
      return

    this.sliderIndex -= 1;
    this.position += 33.333;
    slider.style.transform = `translateX(${this.position}%)`;
  }

  right(slider: HTMLDivElement) {
    if(this.sliderIndex == this.homeCollection.length - 3)
      return

    this.sliderIndex += 1;
    this.position -= 33.333;
    slider.style.transform = `translateX(${this.position}%)`;
  }
}