import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faChevronDown, faPlusCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../../models/subcategory";
import {Item} from "../../../models/item";
import {NgForm} from "@angular/forms";
import {ItemService} from "../../../services/item.service";
import {ImagesLoader} from "../../../shared/ImagesLoader";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public expanded: boolean = false;

  public icons = {times: faTimes, check: faCheck, open: faChevronDown, plus: faPlusCircle}

  @Input()
  public item: Item | undefined;

  @Input()
  public subCategories: Subcategory[];

  @Output()
  private itemEmitter: EventEmitter<Item> = new EventEmitter<Item>();

  public imagesLoader = new ImagesLoader();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

  }

  updateItem(form: NgForm) {

    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('count', form.value.count);
    formData.append('subcategory', form.value.subcategory);
    this.imagesLoader.removeImagesList.forEach(x => formData.append('removeImages', x));
    for (let i = 0; i < this.imagesLoader.dataTransfer.files.length; i++)
      formData.append('addImages', this.imagesLoader.dataTransfer.files[i]);

    this.itemService.update(form.value.id, formData).subscribe(() => {
    }, error => console.log(error));
  }

  deleteItem(item: Item) {
    this.itemService.delete(item.id).subscribe(() => {
      this.itemEmitter.emit(item);
    }, error => console.log(error));
  }
}
