import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";
import {Info} from "../../../models/Info";
import {InfoService} from "../../../services/info.service";
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public icons = {mail: faEnvelope, phone: faPhone, whatsApp: faWhatsapp, mark: faMapMarkerAlt};

    public info: Info;
    public categories: Category[];

    constructor(public categoryService: CategoryService,
                private infoService: InfoService) {}

    ngOnInit(): void {
        this.categoryService.getAll().subscribe((response: Category[]) => {
            this.categories = response.filter((e: Category) => e.name != "Default" && e.id != 0);
        }, error => console.log(error));
        this.infoService.get().subscribe((response: Info) => {
            this.info = response;
        }, error => console.log(error));
    }

}
