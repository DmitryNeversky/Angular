import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {SearchFilterPipe} from "../../pipes/search-filter.pipe";
import {FormsModule} from "@angular/forms";
import {PriceFilterPipe} from "../../pipes/price-filter.pipe";
import {AvailableFilterPipe} from "../../pipes/available-filter.pipe";

@NgModule({
    declarations: [CatalogComponent, SearchFilterPipe, PriceFilterPipe, AvailableFilterPipe],
    imports: [CommonModule, CatalogRoutingModule, FormsModule],
    providers: [],
    exports: [SearchFilterPipe, PriceFilterPipe, AvailableFilterPipe]
})
export class CatalogModule {

}
