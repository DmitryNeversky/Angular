import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Subcategory} from "../../../entities/subcategory";
import {SubcategoriesService} from "../../../services/subcategories.service";
import {Category} from "../../../entities/category";
import {CategoriesService} from "../../../services/categories.service";

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

  constructor(private service: SubcategoriesService, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getSubcategories();
    this.addForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl()
    });
    this.categoryService.getCategories().subscribe(r => {
      this.categories = r;
    });
  }

  private getSubcategories(){
    this.service.getSubcategories().subscribe((response: Subcategory[]) => {
      this.subcategories = response;
    }, error => { console.log(error.message) });
  }

  public onAdd(): void {
    // if(this.subcategories.find(x => x.name === this.addForm.value.name))
    //   return;

    let subcategory: Subcategory = {
      name: this.addForm.value.name,
      categoryId: this.addForm.value.category
    }

    console.log(subcategory);

    this.service.addSubcategory(subcategory).subscribe((response: Subcategory) => {
      this.subcategories.push(response);
    }, error => { console.log(error) });
  }

  public onDelete(subcategory: Subcategory): void {
    this.subcategories.splice(this.subcategories.indexOf(subcategory), 1);
    this.service.deleteSubcategory(subcategory).subscribe( () => {
    }, error => { console.log(error) });
  }

  public onUpdate(updateForm: NgForm): void {
    console.log(updateForm.value);
    this.service.updateSubcategory(updateForm.value).subscribe( (response: Subcategory) => {
      this.getSubcategories();
      console.log(response);
    }, error => { console.log(error) });
  }
}
