import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public categories: Category[];

    constructor(public categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.categoryService.getAll().subscribe((response: Category[]) => {
            this.categories = response;
        }, error => console.log(error));
    }

}
