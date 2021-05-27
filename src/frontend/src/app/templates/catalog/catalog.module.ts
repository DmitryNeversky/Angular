import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {SearchFilterPipe} from "../../pipes/search-filter.pipe";
import {FormsModule} from "@angular/forms";
import {PriceFilterPipe} from "../../pipes/price-filter.pipe";
import {AvailableFilterPipe} from "../../pipes/available-filter.pipe";
import {CategoriesComponent} from './categories/categories.component';
import {SubcategoriesComponent} from './subcategories/subcategories.component';
import {ItemsComponent} from './items/items.component';
import {ProductComponent} from './product/product.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [CatalogComponent, SearchFilterPipe, PriceFilterPipe, AvailableFilterPipe, CategoriesComponent, SubcategoriesComponent, ItemsComponent, ProductComponent],
    imports: [CommonModule, CatalogRoutingModule, FormsModule, SharedModule],
    providers: [],
    exports: [SearchFilterPipe, PriceFilterPipe, AvailableFilterPipe]
})
export class CatalogModule {

}
