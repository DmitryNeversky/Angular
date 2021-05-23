import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public item: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.itemService.get(params.item).subscribe((response: Item) => {
        this.item = response;
      });
    });
  }

}
