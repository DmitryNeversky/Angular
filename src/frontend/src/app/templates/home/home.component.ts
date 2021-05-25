import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeCollectionSize: number = 3;
  public categories: Category[] = [];

  constructor(private categoryService: CategoryService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.loadSettings();
    this.loadCategories();
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
}
