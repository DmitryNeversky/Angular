import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, FontAwesomeModule],
    providers: []
})
export class ContactModule {

}
