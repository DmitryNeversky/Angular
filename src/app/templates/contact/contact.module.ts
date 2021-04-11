import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ContactRoutingModule} from "./contact-routing.module";

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, FontAwesomeModule, ContactRoutingModule],
    providers: []
})
export class ContactModule {

}
