import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsComponent} from "./items.component";
import {ItemsService} from "./items.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ItemsComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [ItemsService]
})
export class ItemsModule {

}
