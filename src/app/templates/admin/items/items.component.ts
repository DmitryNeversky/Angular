import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ItemsService} from "../../../services/items.service";
import {Item} from "../../../models/item";
import {Subcategory} from "../../../models/subcategory";
import {SubcategoriesService} from "../../../services/subcategories.service";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public icons = {times: faTimes, check: faCheck}

  public items: Item[];
  public subCategories: Subcategory[];

  public addForm: FormGroup;
  public loadImages = [];

  constructor(private itemService: ItemsService, private subCategoryService: SubcategoriesService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      images: new FormControl(),
      price: new FormControl(),
      subCategory: new FormControl()
    });
    this.subCategoryService.getSubcategories().subscribe((response: Subcategory[]) => {
      this.subCategories = response;
    },error => console.log(error));

    this.getItems();
  }

  private dt = new DataTransfer()

  loadImage(event) {

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

        this.dt.items.add(file)

        let reader = new FileReader();

        reader.onload = function (e){
          component.loadImages.push(e.target.result);
        }

        reader.readAsDataURL(file); // convert to base64 string
      }

      event.target.files = this.dt.files
    }
  }

  removeImage(event){
    this.dt.items.remove(event.target)
    console.log(this.dt.items)
    event.target.remove()
  }

  private getItems(){
    this.itemService.getItems().subscribe((response: Item[]) => {
      this.items = response;
    }, error => console.log(error));
  }

  public addItem(){
    this.itemService.addItem(this.addForm.value).subscribe((response: Item) => {
      console.log(response);
      this.items.push(response);
    }, error => console.log(error));
  }
}