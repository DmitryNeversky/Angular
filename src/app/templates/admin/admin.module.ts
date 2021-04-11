import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {CategoriesService} from "../../services/categories.service";
import {SubcategoriesService} from "../../services/subcategories.service";
import {ItemsService} from "../../services/items.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";

@NgModule({
    declarations: [AdminComponent, CategoriesComponent, SubcategoriesComponent, ItemsComponent],
    imports: [
        CommonModule,

        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule,

        AdminRoutingModule,
    ],
})
export class AdminModule {

}