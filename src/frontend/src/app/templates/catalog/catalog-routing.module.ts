import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "./catalog.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";

const routes: Routes = [
    {
        path: '',
        component: CatalogComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CategoriesComponent
            },
            {
                path: ':category',
                component: SubcategoriesComponent
            },
            {
                path: ':category/:subcategory',
                component: ItemsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule { }
