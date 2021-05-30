import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";
import {faCheck, faChevronDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {ImageLoader} from "../../../shared/ImageLoader";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public expanded: boolean = false;

  public icons = {times: faTimes, check: faCheck, open: faChevronDown}

  @Input()
  public category: Category;

  @Output()
  public categoryEmitter: EventEmitter<Category> = new EventEmitter<Category>();

  public imageLoader = new ImageLoader();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  public onUpdate(updateForm: NgForm): void {
    let formData = new FormData();

    formData.append('name', updateForm.value.name);
    if(this.imageLoader.removedImage != undefined)
      formData.append('removeImage', this.imageLoader.removedImage);
    if(this.imageLoader.dataTransfer.files[0] != null)
      formData.append('image', this.imageLoader.dataTransfer.files[0]);

    this.categoryService.update(updateForm.value.id, formData).subscribe( () => {
    }, error => console.log(error));
  }

  public onDelete(category: Category): void {
    this.categoryService.delete(category).subscribe( () => {
      this.categoryEmitter.emit(category);
    }, error => console.log(error));
  }
}
