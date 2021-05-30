import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../models/subcategory";
import {SubcategoryService} from "../../services/subcategory.service";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";
import {ImageLoader} from "../../shared/ImageLoader";

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[] = [];
  public subcategories: Subcategory[] = [];
  public imageLoader: ImageLoader = new ImageLoader();

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private subCategoryService: SubcategoryService) { }

  ngOnInit(): void {
    // this.subcategories = this.activatedRoute.snapshot.data.subCategories;

    this.subCategoryService.getAll().subscribe((response: Subcategory[]) => {
      this.subcategories = response;
      console.log("sub - subCategories: ");
      response.forEach(console.log);
    });

    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
      console.log("sub - Categories: ");
      response.forEach(console.log);
    });
  }

  removeSubCategory(subCategory: Subcategory){
    this.subcategories.splice(this.subcategories.indexOf(subCategory), 1);
  }
}
