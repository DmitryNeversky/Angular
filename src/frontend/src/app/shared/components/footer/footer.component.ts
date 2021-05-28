import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {}

}
