import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {ItemComponent} from "./items/item/item.component";
import {CategoryComponent} from "./categories/category/category.component";
import {SubcategoryComponent} from "./subcategories/subcategory/subcategory.component";
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "../auth.guard";
import {GeneralComponent} from './general/general.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        AdminComponent,
        CategoriesComponent,
        SubcategoriesComponent,
        ItemsComponent,
        CategoryComponent,
        SubcategoryComponent,
        ItemComponent,
        GeneralComponent,
    ],
    imports: [
        CommonModule,

        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule,
        SharedModule,

        AdminRoutingModule,
    ],
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class AdminModule {

}