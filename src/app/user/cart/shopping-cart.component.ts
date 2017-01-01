import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: []
})
export class ShoppingCartComponent {
  isCartEmpty: boolean = true;
  userKey:string;
  //loggedIn: boolean;
  pageTitle: string = "Your Shopping Cart";

  constructor(){ }

  //constructor(private auth: AuthenticationService){ }

  //ngOnInit() {
  //  this.auth.isLoggedIn()
  //    .subscribe((user) => {
  //      if(user) {
  //        this.loggedIn = true;
  //        this.userKey = user.google.uid;
  //        console.log("Not logged in page says user is logged in:", this.userKey);
  //      }
  //      else {
  //        this.loggedIn = false;
  //        this.userKey = "";
  //      }
  //    })
  //}
}
