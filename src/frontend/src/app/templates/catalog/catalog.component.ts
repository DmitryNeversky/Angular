import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {Subcategory} from "../../models/subcategory";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public categories: Category[] = [];
  public subCategories: Subcategory[] = [];
  public items: Item[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    }, error => { console.log(error) });
  }
}
