import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../models/subcategory";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";

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
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subcategories = this.activatedRoute.snapshot.data.subCategories;

    this.categories = this.activatedRoute.snapshot.data.categories;
  }

  removeSubCategory(subCategory: Subcategory){
    this.subcategories.splice(this.subcategories.indexOf(subCategory), 1);
  }
}
