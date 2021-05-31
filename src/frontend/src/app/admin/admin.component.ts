import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'admin-panel',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  constructor(public authService: AuthService) {}
}
