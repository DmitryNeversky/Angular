import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../../services/items.service";
import {Item} from "../../../models/item";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoriesService} from "../../../services/subcategories.service";
import {faCheck, faChevronDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {ImageLoader} from "../other/ImageLoader";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck, open: faChevronDown}

  public items: Item[];
  public subCategories: Subcategory[];
  public loadImages = [];
  public addImageLoader: ImageLoader;
  public updateImageLoader: ImageLoader;

  constructor(private itemService: ItemsService, private subCategoryService: SubcategoriesService) { }

  ngOnInit(): void {
    this.subCategoryService.getSubcategories().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error => console.log(error));

    this.addImageLoader = new ImageLoader();
    this.updateImageLoader = new ImageLoader();

    this.getItems();
  }

  private getItems(){
    this.itemService.getItems().subscribe((response: Item[]) => {
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

    for (let i = 0; i < this.addImageLoader.dataTransfer.files.length; i++)
      formData.append('images', this.addImageLoader.dataTransfer.files[i]);

    this.itemService.addItem(formData).subscribe((response: Item) => {
      this.items.push(response);
    }, error => console.log(error));
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).subscribe(() => {
      this.items.splice(this.items.indexOf(item), 1);
    }, error => console.log(error));
  }

  public removeImagesList: string[] = [];

  remImage(event, image){
    if(event.target.hasAttribute('remove')) {
      event.target.removeAttribute('remove');
      this.removeImagesList = this.removeImagesList.filter(x => x != image);
      event.target.style.opacity = '1';
    } else {
      event.target.setAttribute('remove', null);
      this.removeImagesList.push(image);
      event.target.style.opacity = '0.5';
    }
  }

  updateItem(form: NgForm) {

    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('count', form.value.count);
    formData.append('subCategory', form.value.subCategory);
    this.removeImagesList.forEach(x => formData.append('removeImages', x));
    for (let i = 0; i < this.updateImageLoader.dataTransfer.files.length; i++)
      formData.append('addImages', this.updateImageLoader.dataTransfer.files[i]);

    this.itemService.updateItem(form.value.id, formData).subscribe((response: Item) => {
      console.log(response);
      this.items.push(response);
    }, error => console.log(error));
  }

  openItem(event){
    event.target.style.transform = 'rotate(180deg)';
  }
}