import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {AuthGuard} from "../auth.guard";
import {GeneralComponent} from "./general/general.component";

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'general',
                component: GeneralComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent,
            },
            {
                path: 'subcategories',
                component: SubcategoriesComponent,
            },
            {
                path: 'items',
                component: ItemsComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}