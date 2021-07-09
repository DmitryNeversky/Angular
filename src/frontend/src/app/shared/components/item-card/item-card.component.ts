import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Item} from "../../../models/item";
import {User} from "../../../models/User";
import {ItemService} from "../../../services/item.service";
import {faHeart as faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHearted} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  public icons = {heart: faHeart, hearted: faHearted};

  @Input()
  public item: Item;

  @Input()
  public user: User;

  public lockedWish: boolean;

  public userWishList: number[];

  constructor(private userService: UserService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.userWishList = this.user.wishList.map(x => x.id);
  }


  addLook(item: Item) {
    if (!item.looks.includes(this.user.ip)) {

      let formData = new FormData();
      formData.append('itemId', item.id.toString());
      formData.append('ip', this.user.ip);

      this.itemService.addLook(formData);
    }
  }

  private clickable: boolean = true;

  wish(event: any, item: Item){
    if(!this.clickable)
      return

    this.clickable = false;

    if(this.userWishList.find(x => x == item.id))
      this.userService.removeWish(this.user.ip, item)
          .subscribe(() => {
            this.userWishList.splice(this.userWishList.indexOf(item.id), 1);
            this.clickable = true;
          }, error => console.log(error));
    else
      this.userService.addWish(this.user.ip, item)
          .subscribe(() => {
            this.userWishList.push(item.id);
            this.clickable = true;
          }, error => console.log(error));
  }
}
