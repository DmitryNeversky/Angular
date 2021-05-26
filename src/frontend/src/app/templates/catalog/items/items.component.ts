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
        this.initPagination();
        this.goIndex(0);
      })
    });

    this.preload = false;
  }

  public pageIndex: number = 0;
  public pageSize: number = 3;
  public pages: number[] = [];

  initPagination(){
    for(let i = 0; i < this.items.length / this.pageSize; i++){
      this.pages.push(i);
    }
  }

  arr: Item[] = [];

  goIndex(index: number){
    this.pageIndex = index;
    this.arr = [];
    for(let i = 0; i < this.pageSize; i++){
      this.arr.push(this.items[index * this.pageSize + i]);
    }
  }

}
