import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CategoryService} from "../services/category.service";
import {SubcategoryService} from "../services/subcategory.service";
import {ItemService} from "../services/item.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ImageLoader} from "../shared/ImageLoader";
import {Category} from "../models/category";
import {Subcategory} from "../models/subcategory";

@Component({
  selector: 'admin-panel',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(public authService: AuthService,
              private categoryService: CategoryService,
              private subCategoryService: SubcategoryService,
              private itemService: ItemService) {

  }

  public categories: Category[];
  public subCategories: Subcategory[];

  public categoryForm: FormGroup;
  public subCategoryForm: FormGroup;
  public itemForm: FormGroup;

  public categoryImageLoader = new ImageLoader();
  public subCategoryImageLoader = new ImageLoader();
  public itemImageLoader = new ImageLoader();

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [])
    });
    this.subCategoryForm = new FormGroup({
      name: new FormControl('', []),
      category: new FormControl('1')
    });
    this.itemForm = new FormGroup({
      name: new FormControl('', []),
      description: new FormControl('', []),
      price: new FormControl('', []),
      count: new FormControl('', []),
      subCategory: new FormControl('1', [])
    });
  }

  addCategory(){
    if(this.categories.find(x => x.name === this.categoryForm.value.name))
      return;

    let formData = new FormData();

    formData.append('name', this.categoryForm.value.name);
    formData.append('image', this.categoryImageLoader.dataTransfer.files[0]);

    this.categoryService.add(formData).subscribe(() => {
      this.categoryForm.reset();
    }, error => { console.log(error) });
  }

  addSubCategory(){
    if(this.subCategories.find(x => x.name === this.subCategoryForm.value.name))
      return

    let formData = new FormData();

    formData.append('name', this.subCategoryForm.value.name);
    formData.append('category', this.subCategoryForm.value.category);
    formData.append('preview', this.subCategoryImageLoader.dataTransfer.files[0]);

    this.subCategoryService.add(formData).subscribe(() => {
      this.subCategoryForm.reset();
    }, error => { console.log(error) });
  }

  addItem(){
    let formData = new FormData();

    formData.append('name', this.itemForm.value.name);
    formData.append('description', this.itemForm.value.description);
    formData.append('price', this.itemForm.value.price);
    formData.append('count', this.itemForm.value.count);
    formData.append('subCategory', this.itemForm.value.subCategory);

    for (let i = 0; i < this.itemImageLoader.dataTransfer.files.length; i++)
      formData.append('images', this.itemImageLoader.dataTransfer.files[i]);

    this.itemService.add(formData).subscribe(() => {
      this.itemForm.reset();
    }, error => console.log(error));
  }
}
