import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faChevronDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../../models/subcategory";
import {Item} from "../../../models/item";
import {NgForm} from "@angular/forms";
import {ItemService} from "../../../services/item.service";
import {SubcategoryService} from "../../../services/subcategory.service";
import {ImageLoader} from "../../../shared/ImageLoader";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck, open: faChevronDown}

  @Input()
  public item: Item;

  @Output()
  private itemEvent = new EventEmitter<Item>();

  public subCategories: Subcategory[];
  public imageLoader = new ImageLoader();

  constructor(private itemService: ItemService, private subCategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.subCategoryService.getAll().subscribe(response => {
      this.subCategories = response;
    }, error => console.log(error));
  }

  updateItem(form: NgForm) {

    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('count', form.value.count);
    formData.append('subCategory', form.value.subCategory);
    this.imageLoader.removeImagesList.forEach(x => formData.append('removeImages', x));
    for (let i = 0; i < this.imageLoader.dataTransfer.files.length; i++)
      formData.append('addImages', this.imageLoader.dataTransfer.files[i]);

    this.itemService.update(form.value.id, formData).subscribe((response: Item) => {
      // this.items.push(response);
    }, error => console.log(error));
  }

  openItem(event){
    event.target.style.transform = 'rotate(180deg)';
  }

  deleteItem(item: Item) {
    this.itemService.delete(item.id).subscribe(() => {
      
    }, error => console.log(error));
  }
}
