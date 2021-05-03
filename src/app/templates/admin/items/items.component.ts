import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../models/item";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoryService} from "../../../services/subcategory.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items: Item[];
  public subCategories: Subcategory[];
  public loadImages = [];

  public dataTransfer: DataTransfer = new DataTransfer();

  constructor(private itemService: ItemService, private subCategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.subCategoryService.getAll().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error => console.log(error));

    this.getItems();
  }

  private getItems(){
    this.itemService.getAll().subscribe((response: Item[]) => {
      this.items = response;
    }, error => console.log(error));
  }

  public addItem(form: NgForm){

    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('count', form.value.count);
    formData.append('subCategory', form.value.subCategory);

    for (let i = 0; i < this.dataTransfer.files.length; i++)
      formData.append('images', this.dataTransfer.files[i]);

    this.itemService.add(formData).subscribe((response: Item) => {
      this.items.push(response);
    }, error => console.log(error));
  }

  load(event) {

    let component = this;

    if (event.target.files && event.target.files[0]) {

      for(const file of event.target.files){

        let ext = file.name.match(/\.([^\.]+)$/)[1];

        switch (ext) {
          case 'jpg':
          case 'jpeg':
          case 'png':
            break;
          default:
            continue;
        }

        this.dataTransfer.items.add(file);

        let reader = new FileReader();

        reader.onload = function (e){
          component.loadImages.push(e.target.result);
        }

        reader.readAsDataURL(file); // convert to base64 string
      }

      event.target.files = this.dataTransfer.files;
    }
  }

  removeImage(event){
    this.dataTransfer.items.remove(event.target);
    event.target.remove();
  }
}