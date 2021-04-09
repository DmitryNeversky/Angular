import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from "./categories.component";
import {CategoriesService} from "./categories.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, HttpClientModule],
    providers: [CategoriesService]
})
export class CategoriesModule {

}
