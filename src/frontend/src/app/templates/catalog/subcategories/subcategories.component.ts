import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subcategory} from "../../../models/subcategory";

@Component({
    selector: 'app-subcategories-page',
    templateUrl: './subcategories.component.html',
    styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

    public subcategories: Subcategory[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.subcategories = this.activatedRoute.snapshot.data.subcategories.filter(x => x.items.length > 0);
    }

}
