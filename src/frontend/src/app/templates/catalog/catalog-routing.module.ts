import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "./catalog.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {CategoriesResolver} from "../../shared/resolvers/categories.resolver";
import {SubcategoriesResolver} from "../../shared/resolvers/subcategories.resolver";

const routes: Routes = [
    {
        path: '',
        component: CatalogComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CategoriesComponent,
                resolve: {
                    categories: CategoriesResolver
                }
            },
            {
                path: ':category',
                component: SubcategoriesComponent,
                resolve: {
                    subcategories: SubcategoriesResolver
                }
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
export class CatalogRoutingModule {
}
