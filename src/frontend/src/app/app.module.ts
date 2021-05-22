import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AdminModule} from "./admin/admin.module";
import {LoginComponent} from './admin/login/login.component';
import {CategoryService} from "./services/category.service";
import {SubcategoryService} from "./services/subcategory.service";
import {ItemService} from "./services/item.service";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        AdminModule,

        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
    ],
    providers: [CategoryService, SubcategoryService, ItemService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
