import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageLoader} from "../../shared/ImageLoader";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = [];
  public imageLoader = new ImageLoader();

  public addForm: FormGroup;

  constructor(private service: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data.categories;

    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(17), Validators.required])
    });
  }

  onAdd(){

    if(this.categories.find(x => x.name === this.addForm.value.name) || !this.addForm.valid)
      return;

    let formData = new FormData();
    formData.append('name', this.addForm.value.name);
    formData.append('image', this.imageLoader.dataTransfer.files[0]);

    this.service.add(formData).subscribe((response: Category) => {
      this.categories.push(response);
    }, error => { console.log(error) });
  }

  removeCategory(category: Category){
    this.categories.splice(this.categories.indexOf(category, 1));
  }
}
