import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {SettingsService} from "../../services/settings.service";
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeCollectionSize: number = 3;
  public categories: Category[] = [];
  public popularItems: Item[];

  constructor(private categoryService: CategoryService,
              private settingsService: SettingsService,
              private itemService: ItemService) { }

  ngOnInit() {
    this.loadSettings();
    this.loadCategories();
    this.initPopularItems();
  }

  loadCategories(){
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
      this.categories.splice(this.homeCollectionSize);
    }, error => console.log(error));
  }

  loadSettings(){
    this.settingsService.getHomeCollectionSize().subscribe((response: number) => {
      this.homeCollectionSize = response;
    }, error => console.log(error));
  }

  initPopularItems(){
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.popularItems = response.sort((a, b) => {
        if(a.looks > b.looks)
          return -1
        else if(a.looks < b.looks)
          return 1
        else
          return 0
      });
      this.popularItems.length = 3; // {$}
    })
  }
}
