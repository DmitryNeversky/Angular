import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[];

  public addForm: FormGroup;

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.addForm = new FormGroup({
      name: new FormControl()
    });
  }

  private getCategories(){
    this.service.getAll().subscribe((response: Category[]) => {
      this.categories = response;
      response.forEach(x => console.log(x));
    }, error => { console.log(error.message) });
  }

  public onAdd(): void {
    if(this.categories.find(x => x.name === this.addForm.value.name))
      return;

    let formData = new FormData();
    formData.append('name', this.addForm.value.name);

    this.service.add(formData).subscribe((response: Category) => {
      this.categories.push(response);
    }, error => { console.log(error) });
  }

  public onUpdate(updateForm: NgForm): void {
    let formData = new FormData();
    formData.append('name', updateForm.value.name);

    this.service.update(updateForm.value.id, formData).subscribe( (response: Category) => {
      this.getCategories(); // Оптимизировать с помощью response
    }, error => { console.log(error) });
  }

  public onDelete(category: Category): void {
    this.service.delete(category).subscribe( () => {
      this.categories.splice(this.categories.indexOf(category), 1);
    }, error => { console.log(error) });
  }
}
