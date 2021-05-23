import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SubcategoryService} from "../../../services/subcategory.service";
import {Subcategory} from "../../../models/subcategory";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-items-page',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public search: string = "";
  public min: number = 0;
  public max: number = 0;
  public available: boolean = false;

  public items: Item[];

  public preload: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.preload = true;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.subcategoryService.getByName(params.subcategory).subscribe((response: Subcategory) => {
        this.items = response.items;
      })
    });

    this.preload = false;
  }

}
