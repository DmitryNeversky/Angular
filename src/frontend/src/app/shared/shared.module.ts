import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {SearchNamePipe} from "../pipes/search-name.pipe";
import {SearchIdPipe} from "../pipes/search-id.pipe";
import {SearchCategoryPipe} from "../pipes/search-category.pipe";
import {SearchSubcategoryPipe} from "../pipes/search-subcategory.pipe";
import {Click180Directive} from "../directives/click180.directive";
import {SlideComponent} from './components/slider/slide/slide.component';
import {SliderComponent} from "./components/slider/slider.component";
import {PreloaderComponent} from './components/preloader/preloader.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        BreadcrumbComponent,
        SearchNamePipe,
        SearchIdPipe,
        SearchCategoryPipe,
        SearchSubcategoryPipe,
        Click180Directive,
        SliderComponent,
        SlideComponent,
        PreloaderComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        SearchNamePipe,
        SearchIdPipe,
        SearchCategoryPipe,
        SearchSubcategoryPipe,
        Click180Directive,
        SliderComponent,
        SlideComponent,
        PreloaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
})
export class SharedModule {
}
