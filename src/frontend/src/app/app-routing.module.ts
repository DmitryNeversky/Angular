import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./templates/product/product.component";
import {ProductResolver} from "./shared/resolvers/product.resolver";
import {InfoResolver} from "./shared/resolvers/info.resolver";

const routes: Routes = [
    {
        path: '',
        data: {animation: 'home'},
        loadChildren: () => import('./templates/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'catalog',
        data: {animation: 'catalog'},
        loadChildren: () => import('./templates/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'about',
        data: {animation: 'about'},
        loadChildren: () => import('./templates/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'contact',
        data: {animation: 'contact'},
        loadChildren: () => import('./templates/contact/contact.module').then(m => m.ContactModule),
        resolve: {
            contacts: InfoResolver
        }
    },
    {
        path: 'admin',
        data: {animation: 'admin'},
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        resolve: {
            product: ProductResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}