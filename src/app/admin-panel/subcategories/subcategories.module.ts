import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubcategoriesComponent} from "./subcategories.component";
import {SubcategoriesService} from "./subcategories.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [SubcategoriesComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule, HttpClientModule],
    providers: [SubcategoriesService]
})
export class SubcategoriesModule {

}
