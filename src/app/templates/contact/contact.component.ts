import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEnvelope, faPhone,  } from '@fortawesome/free-solid-svg-icons';
import { faVk, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  public icons = {
    mark: faMapMarkerAlt,
    envelope: faEnvelope,
    phone: faPhone,
    vk: faVk,
    instagram: faInstagram,
    whatsapp: faWhatsapp,
    twitter: faTwitter
  }

  constructor() { }

  ngOnInit(): void {
  }

}
