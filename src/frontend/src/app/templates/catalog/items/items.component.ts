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
        this.filteredItems = response.items;
        this.initPagination(this.items);
        this.goIndex(0);
      })
    });

    this.preload = false;
  }

  public pageIndex: number = 0;
  public pageSize: number = 8;
  public pages: number[] = [];

  initPagination(array: Item[]){
    this.pages = [];
    for(let i = 0; i < array.length / this.pageSize; i++){
      this.pages.push(i);
    }
  }

  paginatedItems: Item[] = []

  goIndex(index: number){
    this.pageIndex = index;
    this.paginatedItems = [];
    for(let i = 0; i < this.pageSize; i++){
        this.paginatedItems.push(this.filteredItems[index * this.pageSize + i]);
    }
    this.initPagination(this.filteredItems);
  }

  filteredItems: Item[] = [];

  filter(){
    this.filteredItems = this.items;

    if(this.search.trim() != '')
      this.filteredItems = this.filteredItems.filter(x => x.name.includes(this.search));

    if(this.min == 0 && this.max != 0)
      this.filteredItems = this.filteredItems.filter(x => x.price <= this.max)

    if(this.min != 0 && this.max == 0)
      this.filteredItems = this.filteredItems.filter(x => x.price >= this.min)

    if(this.min != 0 && this.max != 0)
      this.filteredItems = this.filteredItems.filter(x => x.price >= this.min && x.price <= this.max)

    if(this.available)
      this.filteredItems = this.filteredItems.filter(x => x.count > 0);

    this.goIndex(0);
  }

  setPageSize(event: any){
    this.pageSize = event.target.firstChild.data;
  }

}
