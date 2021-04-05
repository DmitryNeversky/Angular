import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "./services/item.service";
import {Item} from "./entities/item";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  items:Item[] = [];

  form:FormGroup;

  constructor(private itemService:ItemService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl(),
      price: new FormControl(),
      count: new FormControl(),
    });
    this.getItems();
  }

  public onAddItem(){
    if(this.form.invalid) {
      return;
    }
    this.itemService.addItem(this.form.value).subscribe((response:Item) => {
      this.items.push(response);
      this.form.reset();
    });
  }

  public getItems(): void {
    this.itemService.getItems().subscribe(
        (response:Item[]) => {
          this.items = response;
        },
        (error:HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

  public deleteItem(item){
    this.itemService.deleteItem(item).subscribe(() => {
      this.getItems();
    });
  }

  public updateItem(item:Item) : void{
    console.log(item)
    this.itemService.updateItem(item).subscribe((response:Item) => {
      console.log(response);
      this.getItems();
    }, error => {
      console.log(error)
    });
  }
}
