import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImagesLoader} from "../../shared/ImagesLoader";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public nameSearch: string = '';
  public idSearch: string = '';

  public categories: Category[] = [];
  public imagesLoader = new ImagesLoader();

  public addForm: FormGroup;

  constructor(private service: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data.categories;

    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(17), Validators.required])
    });
  }

  removeCategory(category: Category){
    this.categories.splice(this.categories.indexOf(category), 1);
  }
}
