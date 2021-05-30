import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../models/category";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  public categories: Category[];

  constructor() { }

  ngOnInit(): void {
  }

}
