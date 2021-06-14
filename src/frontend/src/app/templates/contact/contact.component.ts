import {Component, OnInit} from '@angular/core';
import {faEnvelope, faMapMarkerAlt, faPhone,} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTwitter, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {Info} from "../../models/Info";
import {MailService} from "../../services/mail.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

    public info: Info;

    public form: FormGroup;
    public submitted: boolean = false;

    public icons = {
        mark: faMapMarkerAlt,
        envelope: faEnvelope,
        phone: faPhone,
        vk: faVk,
        instagram: faInstagram,
        whatsapp: faWhatsapp,
        twitter: faTwitter
    }

    constructor(private activatedRoute: ActivatedRoute,
                private mailService: MailService) {
    }

    ngOnInit() {
        this.info = this.activatedRoute.snapshot.data.contacts;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.minLength(3), Validators.required]),
            phone: new FormControl('', []),
            email: new FormControl('', [Validators.email]),
            message: new FormControl('', [Validators.minLength(40), Validators.required]),
        });
    }

    send() {
        this.submitted = true;

        let body = {
            name: this.form.get('name').value,
            email: this.form.get('email').value,
            phone: this.form.get('phone').value,
            message: this.form.get('message').value
        }

        this.mailService.send(body).subscribe(() => {
            console.log("Ok");
        }, error => console.log(error));
    }
}
