import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {AdminPanelComponent} from "./admin-panel.component";

const routes: Routes = [
    {path: 'admin-panel', component: AdminPanelComponent},
    {path: 'admin-panel/categories', component: CategoriesComponent},
    {path: 'admin-panel/subcategories', component: SubcategoriesComponent},
    {path: 'admin-panel/items', component: ItemsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminPanelRoutingModule {

}