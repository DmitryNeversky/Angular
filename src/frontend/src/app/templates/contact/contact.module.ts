import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ContactRoutingModule} from "./contact-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, FontAwesomeModule, ContactRoutingModule, SharedModule],
    providers: []
})
export class ContactModule {

}
