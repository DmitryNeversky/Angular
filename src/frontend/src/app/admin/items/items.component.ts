import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/item";
import {Subcategory} from "../../models/subcategory";
import {SubcategoryService} from "../../services/subcategory.service";
import {ImagesLoader} from "../../shared/ImagesLoader";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {

  public nameSearch: string = '';
  public idSearch: string = '';
  public subCategorySearch: number = 0;

  public items: Item[] = [];
  public subCategories: Subcategory[] = [];
  public imagesLoader = new ImagesLoader();

  constructor(private itemService: ItemService,
              private subCategoryService: SubcategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.activatedRoute.snapshot.data.items;
    // this.activatedRoute.data.subscribe(data => { this.items = data.items });
    this.subCategoryService.getAll().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error =>  console.log(error));
  }

  removeItem(item: Item){
    this.items.splice(this.items.indexOf(item));
  }
}