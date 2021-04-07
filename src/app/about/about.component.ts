import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../styles.css']
})
export class AboutComponent implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
