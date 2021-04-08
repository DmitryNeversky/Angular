import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {AdminPanelComponent} from "./admin-panel.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        CategoriesComponent,
        SubcategoriesComponent,
        ItemsComponent,
        AdminPanelComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule,
        FormsModule
    ],
    exports: [
        AdminPanelComponent
    ]
})
export class AdminPanelModule { }