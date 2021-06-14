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
import {faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import {InfoService} from "../../services/info.service";
import {Info} from "../../models/Info";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public icons = {plus: faPlusSquare};

  constructor(private categoryService: CategoryService,
              private subcategoryService: SubcategoryService,
              private itemService: ItemService,
              private metaService: MetaService,
              private infoService: InfoService) {}

  public categories: Category[];
  public subCategories: Subcategory[];
  public items: Item[];

  public info: Info;

  public categoryForm: FormGroup;
  public subcategoryForm: FormGroup;
  public itemForm: FormGroup;

  public categoryImageLoader = new ImageLoader();
  public subcategoryImageLoader = new ImageLoader();
  public itemImagesLoader = new ImagesLoader();

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response;
    });
    this.subcategoryService.getAll().subscribe(response => {
      this.subCategories = response;
    });
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.items = response;
    });
    this.categoryForm = new FormGroup({
      name: new FormControl('', [])
    });
    this.subcategoryForm = new FormGroup({
      name: new FormControl('', []),
      category: new FormControl('1')
    });
    this.itemForm = new FormGroup({
      name: new FormControl('', []),
      description: new FormControl('', []),
      price: new FormControl('', []),
      count: new FormControl('', []),
      subcategory: new FormControl('1', [])
    });
    this.infoService.get().subscribe(response => {
      this.info = response;
    });
  }

  addCategory(){
    if(this.categories.find(x => x.name === this.categoryForm.value.name))
      return;

    let formData = new FormData();

    formData.append('name', this.categoryForm.value.name);
    formData.append('image', this.categoryImageLoader.dataTransfer.files[0]);

    this.categoryService.add(formData).subscribe((response: Category) => {
      this.categories.push(response);
      this.categoryForm.reset();
      this.categoryImageLoader.reset();
    }, error => console.log(error));
  }

  addSubCategory(){
    if(this.subCategories.find(x => x.name === this.subcategoryForm.value.name))
      return

    let formData = new FormData();

    formData.append('name', this.subcategoryForm.value.name);
    formData.append('categoryId', this.subcategoryForm.value.category);
    formData.append('image', this.subcategoryImageLoader.dataTransfer.files[0]);

    this.subcategoryService.add(formData).subscribe((response: Subcategory) => {
      this.subCategories.push(response);
      this.subcategoryForm.reset();
      this.subcategoryForm.get('category').setValue(1);
      this.subcategoryImageLoader.reset();
    }, error => console.log(error));
  }

  addItem(){
    let formData = new FormData();

    formData.append('name', this.itemForm.value.name);
    formData.append('description', this.itemForm.value.description);
    formData.append('price', this.itemForm.value.price);
    formData.append('count', this.itemForm.value.count);
    formData.append('subcategory', this.itemForm.value.subcategory);

    for (let i = 0; i < this.itemImagesLoader.dataTransfer.files.length; i++)
      formData.append('images', this.itemImagesLoader.dataTransfer.files[i]);

    this.itemService.add(formData).subscribe((response: Item) => {
      this.items.push(response);
      this.itemForm.reset();
      this.itemForm.get('subcategory').setValue(1);
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

  elements = [];

  test(event: any, category: Category){
    if(!event.target.classList.contains("added")) {
      this.elements.push(category);
      event.target.classList.add("added");
    } else {
      this.elements = this.elements.filter(x => x != category);
      event.target.classList.remove("added");
    }
    console.log(this.elements);
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

  setInfo(){
    this.infoService.post(this.info).subscribe(() => {
    }, error => console.log(error));
  }
}
