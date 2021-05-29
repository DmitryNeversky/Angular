import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  public addForm: FormGroup;

  constructor(private service: SubcategoryService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subcategories = this.activatedRoute.snapshot.data.subCategories;

    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(17), Validators.required]),
      category: new FormControl('1')
    });

    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }

  removeSubCategory(subCategory: Subcategory){
    this.subcategories.splice(this.subcategories.indexOf(subCategory), 1);
  }
}
