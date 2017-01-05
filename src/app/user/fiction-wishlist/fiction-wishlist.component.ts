import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: "fiction-wishlist",
  templateUrl: "./fiction-wishlist.component.html",
  styleUrls: []
})
export class FictionWishlistComponent {
  isLoggedIn:boolean;
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Fan Fiction Favorite Stories";
  productKeys: any[];
  fictionWishlistInfo: any[];

  constructor(private productsService: ProductsService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.authenticate().subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.productsService.getUserWishlistFictionIds()
          .subscribe(userWhishlistIds => {
            this.productKeys = userWhishlistIds;
            this.fictionWishlistInfo = userWhishlistIds;

            if (this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
              this.isCartEmpty = true;
            } else {
              this.isCartEmpty = false;
            }
          });
      } else {
        this.isLoggedIn = false;
      }
    })
  }

}
