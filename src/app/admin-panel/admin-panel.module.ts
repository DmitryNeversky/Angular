import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {AdminPanelComponent} from "./admin-panel.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        CategoriesComponent,
        SubcategoriesComponent,
        ItemsComponent,
        AdminPanelComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        AdminPanelComponent
    ]
})
export class AdminPanelModule { }