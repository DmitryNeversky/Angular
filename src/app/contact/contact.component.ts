import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../styles.css']
})
export class ContactComponent implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
