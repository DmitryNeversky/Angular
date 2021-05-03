import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";
import {Subcategory} from "../../models/subcategory";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {SubcategoryService} from "../../services/subcategory.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public categories: Category[];
  public subCategories: Subcategory[];
  public items: Item[];

  constructor(private categoryService: CategoryService,
              private subCategoryService: SubcategoryService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getSubCategories();
    this.getItems();
  }

  getCategories(){
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    }, error => { console.log(error) });
  }
  getSubCategories(){
    this.subCategoryService.getAll().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    }, error => { console.log(error) });
  }
  getItems(){
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.items = response;
    }, error => { console.log(error) });
  }
}
