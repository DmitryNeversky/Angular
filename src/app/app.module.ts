import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AdminModule} from "./templates/admin/admin.module";
import {LoginComponent} from './templates/admin/login/login.component';
import {CategoriesService} from "./services/categories.service";
import {SubcategoriesService} from "./services/subcategories.service";
import {ItemsService} from "./services/items.service";

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        AdminModule,

        AppRoutingModule,
    ],
    providers: [CategoriesService, SubcategoriesService, ItemsService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
