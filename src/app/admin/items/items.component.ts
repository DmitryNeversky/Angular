import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";
import {Subcategory} from "../../models/subcategory";
import {SubcategoryService} from "../../services/subcategory.service";
import {NgForm} from "@angular/forms";
import {ImageLoader} from "../../shared/ImageLoader";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {

  public items: Item[];
  public subCategories: Subcategory[];
  public imageLoader = new ImageLoader();

  constructor(private itemService: ItemService, private subCategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.subCategoryService.getAll().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error => console.log(error));

    this.getAll();
  }

  private getAll(){
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.items = response;
    }, error => console.log(error));
  }

  public addItem(form: NgForm){

    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('count', form.value.count);
    formData.append('subCategory', form.value.subCategory);

    for (let i = 0; i < this.imageLoader.dataTransfer.files.length; i++)
      formData.append('images', this.imageLoader.dataTransfer.files[i]);

    this.itemService.add(formData).subscribe((response: Item) => {
      this.items.push(response);
    }, error => console.log(error));
  }

  removeItem(item: Item){
    this.items.splice(this.items.indexOf(item), 1);
  }
}