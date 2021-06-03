import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../models/item";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public item: Item = null;

  public preview: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data.product;
    if(this.item.images.length > 0)
      this.preview = this.item.images[0];
  }

  setPreview(image: string){
    this.preview = image;
  }

}
