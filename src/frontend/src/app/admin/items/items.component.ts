import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";
import {Subcategory} from "../../models/subcategory";
import {SubcategoryService} from "../../services/subcategory.service";
import {ImagesLoader} from "../../shared/ImagesLoader";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {

  public nameSearch: string = '';
  public idSearch: string = '';
  public subcategorySearch: number = 0;

  public items: Item[] = [];
  public subCategories: Subcategory[] = [];
  public imagesLoader = new ImagesLoader();

  constructor(private itemService: ItemService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.itemService.getAll().subscribe((items: Item[]) => {
      this.items = items;
    });
    this.subcategoryService.getAll().subscribe((subcategories: Subcategory[]) => {
      this.subCategories = subcategories;
    });
  }

  removeItem(item: Item){
    this.items.splice(this.items.indexOf(item));
  }
}