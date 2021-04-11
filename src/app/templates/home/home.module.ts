import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, MDBBootstrapModule, HomeRoutingModule],
    providers: []
})
export class HomeModule {

}
