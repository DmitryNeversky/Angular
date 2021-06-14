import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../models/subcategory";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {SubcategoryService} from "../../services/subcategory.service";

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  public nameSearch: string = '';
  public idSearch: string = '';
  public categorySearch: number = 0;

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[] = [];
  public subcategories: Subcategory[] = [];

  constructor(private categoryService: CategoryService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    });

    this.subcategoryService.getAll().subscribe((subCategories: Subcategory[]) => {
      this.subcategories = subCategories;
    })
  }

  removeSubCategory(subcategory: Subcategory){
    this.subcategories.splice(this.subcategories.indexOf(subcategory), 1);
  }
}
