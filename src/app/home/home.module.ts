import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, MDBBootstrapModule],
    providers: []
})
export class HomeModule {

}
