import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ItemsService} from "../../../services/items.service";
import {Item} from "../../../models/item";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoriesService} from "../../../services/subcategories.service";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public items: Item[];
  public addForm: FormGroup;
  public subCategories: Subcategory[];

  constructor(private itemService: ItemsService, private subCategoryService: SubcategoriesService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      //images: new FormControl(),
      price: new FormControl(),
      subCategory: new FormControl()
    });

    this.subCategoryService.getSubcategories().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error => console.log(error));

    this.getItems();
  }

  private getItems(){
    this.itemService.getItems().subscribe((response: Item[]) => {
      this.items = response;
    }, error => console.log(error));
  }

  public addItem(){
    console.log(this.addForm.value);
    this.itemService.addItem(this.addForm.value).subscribe((response: Item) => {
      console.log(response);
      this.items.push(response);
    }, error => console.log(error));
  }
}
