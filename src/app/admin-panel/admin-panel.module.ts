import {NgModule} from "@angular/core";
import {AdminPanelComponent} from "./admin-panel.component";
import {CommonModule} from "@angular/common";
import {SubcategoriesModule} from "./subcategories/subcategories.module";
import {ItemsModule} from "./items/items.module";
import {CategoriesModule} from "./categories/categories.module";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";

@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        CommonModule,

        CategoriesModule,
        ItemsModule,
        SubcategoriesModule,

        AdminPanelRoutingModule,
    ]
})
export class AdminPanelModule {

}