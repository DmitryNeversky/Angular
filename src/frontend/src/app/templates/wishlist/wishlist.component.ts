import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHearted} from "@fortawesome/free-regular-svg-icons";
import {Item} from "../../models/item";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-wishlish',
  templateUrl: './wishlish.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public icons = {heart: faHeart, hearted: faHearted};

  public user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
  }

  unWish(item: Item){
    this.userService.removeWish(this.user.ip, item).subscribe(() => {
      this.user.wishList.splice(this.user.wishList.indexOf(item), 1);
    }, error => console.log(error));
  }
}
