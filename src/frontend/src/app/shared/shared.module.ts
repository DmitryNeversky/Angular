import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbComponent],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
