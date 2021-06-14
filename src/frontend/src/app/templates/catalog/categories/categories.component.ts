import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data.categories.filter(x => x.subcategories.length > 0);
  }
}