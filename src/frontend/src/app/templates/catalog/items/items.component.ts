import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../../models/item";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {User} from "../../../models/User";

@Component({
    selector: 'app-items-page',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    public icons = {left: faAngleLeft, right: faAngleRight};

    public user: User;

    public sortName: boolean = false;
    public sortPrice: boolean = false;
    public sortLook: boolean = false;
    public sortCount: boolean = false;

    public search: string = "";
    public min: number = 0;
    public max: number = 0;
    public available: boolean = false;

    public items: Item[];

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.currentUser;
        this.items = this.activatedRoute.snapshot.data.items;

        this.filteredItems = this.items;
        this.initPagination(this.items);
        this.goIndex(0);
    }

    public pageIndex: number = 0;
    public pageSize: number = 8;
    public pages: number[] = [];

    initPagination(array: Item[]) {
        this.pages = [];
        for (let i = 0; i < array.length / this.pageSize; i++) {
            this.pages.push(i);
        }
    }

    paginatedItems: Item[] = []

    goIndex(index: number) {
        this.pageIndex = index;
        this.paginatedItems = [];
        for (let i = 0; i < this.pageSize; i++) {
            this.paginatedItems.push(this.filteredItems[index * this.pageSize + i]);
        }
        this.initPagination(this.filteredItems);
    }

    filteredItems: Item[] = [];

    filter() {
        this.filteredItems = this.items;

        if (this.search.trim() != '')
            this.filteredItems = this.filteredItems.filter(x => x.name.includes(this.search));

        if (this.min == 0 && this.max != 0)
            this.filteredItems = this.filteredItems.filter(x => x.price <= this.max)

        if (this.min != 0 && this.max == 0)
            this.filteredItems = this.filteredItems.filter(x => x.price >= this.min)

        if (this.min != 0 && this.max != 0)
            this.filteredItems = this.filteredItems.filter(x => x.price >= this.min && x.price <= this.max)

        if (this.available)
            this.filteredItems = this.filteredItems.filter(x => x.count > 0);

        this.goIndex(0);
    }

    sortByName() {
        this.filteredItems = this.filteredItems.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1
            else if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1
            else return 0
        });

        if (this.sortName) {
            this.filteredItems.reverse();
            this.sortName = !this.sortName;
        } else this.sortName = !this.sortName;

        this.goIndex(0);
    }

    sortByPrice() {
        this.filteredItems = this.filteredItems.sort((a, b) => {
            if (a.price > b.price)
                return 1
            else if (a.price < b.price)
                return -1
            else return 0
        });

        if (this.sortPrice) {
            this.filteredItems.reverse();
            this.sortPrice = !this.sortPrice;
        } else this.sortPrice = !this.sortPrice;

        this.goIndex(0);
    }

    sortByLook() {
        this.filteredItems = this.filteredItems.sort((a, b) => {
            if (a.looks.length > b.looks.length)
                return 1
            else if (a.looks.length < b.looks.length)
                return -1
            else return 0
        });

        if (this.sortLook) {
            this.filteredItems.reverse();
            this.sortLook = !this.sortLook;
        } else this.sortLook = !this.sortLook;

        this.goIndex(0);
    }

    sortByCount() {
        this.filteredItems = this.filteredItems.sort((a, b) => {
            if (a.count > b.count)
                return 1
            else if (a.count < b.count)
                return -1
            else return 0
        });

        if (this.sortCount) {
            this.filteredItems.reverse();
            this.sortCount = !this.sortCount;
        } else this.sortCount = !this.sortCount;

        this.goIndex(0);
    }
}
