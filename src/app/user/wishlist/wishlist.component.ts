import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: "wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: []
})
export class WishlistComponent {
  isLoggedIn:boolean;

  isCartEmpty: boolean = false;
  pageTitle: string = "Your Wishlist Products";
  productKeys: any[];
  productsWishlistInfo: any[];

  constructor(private productsService: ProductsService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.authenticate().subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.productsService.getUserWishlistProductsIds()
          .subscribe(userProductIds => {
            this.productKeys = userProductIds;
            this.productsWishlistInfo = userProductIds;

            if (this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
              this.isCartEmpty = true;
            } else {
              this.isCartEmpty = false;
            }
          });
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
