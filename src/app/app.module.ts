import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { AdminPanelRoutingModule } from "./admin-panel/admin-panel-routing.module";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CatalogComponent,
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        AdminPanelModule,
        AdminPanelRoutingModule,
        AppRoutingModule,
        NgbCarouselModule,
        FontAwesomeModule,
        MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
