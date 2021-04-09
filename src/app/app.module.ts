import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { AppRoutingModule } from "./app-routing.module";
import {AboutModule} from "./about/about.module";
import {CatalogModule} from "./catalog/catalog.module";
import {ContactModule} from "./contact/contact.module";
import {HomeModule} from "./home/home.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        AdminPanelModule,
        AboutModule,
        CatalogModule,
        ContactModule,
        HomeModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
