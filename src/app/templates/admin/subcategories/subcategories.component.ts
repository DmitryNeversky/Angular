import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoryService} from "../../../services/subcategory.service";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[];

  public subcategories: Subcategory[];

  public addForm: FormGroup;

  constructor(private service: SubcategoryService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getSubcategories();
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    });

    this.addForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl()
    });
  }

  private getSubcategories(){
    this.service.getAll().subscribe((response: Subcategory[]) => {
      this.subcategories = response;
    }, error => { console.log(error.message) });
  }

  public onAdd(): void {
    if(this.subcategories.find(x => x.name === this.addForm.value.name))
      return;
    if(this.addForm.value.category == null)
      return;

    this.service.add(this.addForm.value).subscribe((response: Subcategory) => {
      this.subcategories.push(response);
    }, error => { console.log(error) });
  }

  public onUpdate(updateForm: NgForm): void { 
    this.service.update(updateForm.value).subscribe(() => {
    }, error => { console.log(error) });
  }

  public onDelete(subcategory: Subcategory): void {
    this.service.delete(subcategory).subscribe( () => {
      this.subcategories.splice(this.subcategories.indexOf(subcategory), 1);
    }, error => { console.log(error) });
  }
}
