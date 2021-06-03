import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {FormsModule} from "@angular/forms";
import {CategoriesComponent} from './categories/categories.component';
import {SubcategoriesComponent} from './subcategories/subcategories.component';
import {ItemsComponent} from './items/items.component';
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [CatalogComponent, CategoriesComponent, SubcategoriesComponent, ItemsComponent],
    imports: [CommonModule, CatalogRoutingModule, FormsModule, SharedModule, FontAwesomeModule],
    providers: [],
})
export class CatalogModule {

}
