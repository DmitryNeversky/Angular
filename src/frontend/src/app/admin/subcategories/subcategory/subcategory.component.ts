import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoryService} from "../../../services/subcategory.service";
import {NgForm} from "@angular/forms";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";
import {ImageLoader} from "../../../shared/ImageLoader";

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  @Input()
  public subCategory: Subcategory | undefined;

  @Output()
  public subCategoryEmitter: EventEmitter<Subcategory> = new EventEmitter<Subcategory>();

  public categories: Category[] = [];

  public imageLoader = new ImageLoader();

  constructor(private subCategoryService: SubcategoryService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    }, error => console.log(error));
  }

  public onUpdate(updateForm: NgForm): void {
    let formData = new FormData();

    formData.append('name', updateForm.value.name);
    formData.append('category', updateForm.value.category);
    if(this.imageLoader.dataTransfer.files[0] != null)
      formData.append('image', this.imageLoader.dataTransfer.files[0]);

    this.subCategoryService.update(updateForm.value.id, formData).subscribe( () => {
    }, error => { console.log(error) });
  }

  public onDelete(subCategory: Subcategory): void {
    this.subCategoryService.delete(subCategory).subscribe( () => {
      this.subCategoryEmitter.emit(subCategory);
    }, error => { console.log(error) });
  }
}
