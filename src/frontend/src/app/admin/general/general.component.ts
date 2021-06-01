import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {SubcategoryService} from "../../services/subcategory.service";
import {ItemService} from "../../services/item.service";
import {Category} from "../../models/category";
import {Subcategory} from "../../models/subcategory";
import {FormControl, FormGroup} from "@angular/forms";
import {ImagesLoader} from "../../shared/ImagesLoader";
import {ImageLoader} from "../../shared/ImageLoader";
import {Item} from "../../models/item";
import {MetaService} from "../../services/meta.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private subCategoryService: SubcategoryService,
              private itemService: ItemService,
              private metaService: MetaService) {

  }

  public categories: Category[];
  public subCategories: Subcategory[];
  public items: Item[];

  public categoryForm: FormGroup;
  public subCategoryForm: FormGroup;
  public itemForm: FormGroup;

  public categoryImageLoader = new ImageLoader();
  public subCategoryImageLoader = new ImageLoader();
  public itemImagesLoader = new ImagesLoader();

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response;
    });
    this.subCategoryService.getAll().subscribe(response => {
      this.subCategories = response;
    });
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.items = response;
    });
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
      this.categoryImageLoader.reset();
    }, error => console.log(error));
  }

  addSubCategory(){
    if(this.subCategories.find(x => x.name === this.subCategoryForm.value.name))
      return

    let formData = new FormData();

    formData.append('name', this.subCategoryForm.value.name);
    formData.append('categoryId', this.subCategoryForm.value.category);
    formData.append('image', this.subCategoryImageLoader.dataTransfer.files[0]);

    this.subCategoryService.add(formData).subscribe(() => {
      this.subCategoryForm.reset();
      this.subCategoryForm.get('category').setValue(1);
      this.subCategoryImageLoader.reset();
    }, error => console.log(error));
  }

  addItem(){
    let formData = new FormData();

    formData.append('name', this.itemForm.value.name);
    formData.append('description', this.itemForm.value.description);
    formData.append('price', this.itemForm.value.price);
    formData.append('count', this.itemForm.value.count);
    formData.append('subCategory', this.itemForm.value.subCategory);

    for (let i = 0; i < this.itemImagesLoader.dataTransfer.files.length; i++)
      formData.append('images', this.itemImagesLoader.dataTransfer.files[i]);

    this.itemService.add(formData).subscribe(() => {
      this.itemForm.reset();
      this.itemForm.get('subCategory').setValue(1);
      this.itemImagesLoader.reset();
    }, error => console.log(error));
  }

  public selects: Category[];

  getHomeCollection(){
    this.metaService.getHomeCollection().subscribe((response: Category[]) => {
      console.log(response);
    });
  }

  setHomeCollection(){
    let formData = new FormData();
    this.selects.forEach(x => formData.append('categories', x.toString()));
    this.metaService.setHomeCollection(formData).subscribe();
  }

  public popularItemsSize: number;

  getPopularItemSize(){
    this.metaService.getPopularSize().subscribe(response => {
      console.log(response);
    });
  }

  setPopularSize(){
    let formData = new FormData();
    formData.append('size', this.popularItemsSize.toString());
    this.metaService.setPopularSize(formData).subscribe();
  }

  public phone;

  getPhone(){
    this.metaService.getPhone().subscribe(response => {
      console.log(response);
    });
  }

  setPhone(){
    let formData = new FormData();
    formData.append('phone', this.phone);
    this.metaService.setPhone(formData).subscribe();
  }

  public address;

  getAddress(){
    this.metaService.getAddress().subscribe(response => {
      console.log(response);
    });
  }

  setAddress(){
    let formData = new FormData();
    formData.append('address', this.address);
    this.metaService.setAddress(formData).subscribe();
  }

  public email;

  getEmail(){
    this.metaService.getEmail().subscribe(response => {
      console.log(response);
    });
  }

  setEmail(){
    let formData = new FormData();
    formData.append('email', this.email);
    this.metaService.setEmail(formData).subscribe();
  }
}
