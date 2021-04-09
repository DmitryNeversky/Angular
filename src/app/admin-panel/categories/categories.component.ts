import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "./categories.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Category} from "./category";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[];

  public addForm: FormGroup;

  constructor(private service: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.addForm = new FormGroup({
      name: new FormControl()
    });
  }

  private getCategories(){
    this.service.getCategories().subscribe((response: Category[]) => {
      console.log(response);
      this.categories = response;
    }, error => { console.log(error.message) });
  }

  public onAdd(): void {
    this.service.addCategory(this.addForm.value).subscribe((response: Category) => {
      this.categories.push(response);
    }, error => { console.log(error) });
  }

  public onDelete(category: Category): void {
    this.categories.splice(this.categories.indexOf(category), 1);
    this.service.deleteCategory(category).subscribe( () => {
    }, error => { console.log(error) });
  }

  public onUpdate(updateForm: NgForm): void {
    console.log(updateForm.value);
    this.service.updateCategory(updateForm.value).subscribe( (response: Category) => {
      this.getCategories();
      console.log(response);
    }, error => { console.log(error) });
  }
}
