import {Component, OnInit} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {Subcategory} from "../../models/subcategory";
import {SubcategoryService} from "../../services/subcategory.service";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ImageLoader} from "../../shared/ImageLoader";

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public categories: Category[];
  public subcategories: Subcategory[];
  public imageLoader: ImageLoader = new ImageLoader();

  constructor(private service: SubcategoryService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getSubcategories();
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }

  private getSubcategories(){
    this.service.getAll().subscribe((response: Subcategory[]) => {
      this.subcategories = response;
    }, error => { console.log(error.message) });
  }

  public onAdd(addForm: NgForm): void {
    if(this.subcategories.find(x => x.name === addForm.value.name))
      return;
    if(addForm.value.category == null)
      return;

    let formData = new FormData();
    formData.append('name', addForm.value.name);
    formData.append('category', addForm.value.category);
    // formData.append('preview', this.imageLoader.dataTransfer.files[0]);

    this.service.add(formData).subscribe((response: Subcategory) => {
      this.subcategories.push(response);
    }, error => { console.log(error) });
  }
}
