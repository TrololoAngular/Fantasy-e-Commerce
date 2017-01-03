import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: []
})
export class ShoppingCartComponent {
  isLoggedIn: boolean;
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Shopping Cart";
  productKeys: any[];
  productsInfo: any[];

  constructor(private auth: AuthenticationService, private productsService: ProductsService){
  }

  ngOnInit() {
    this.auth.authenticate().subscribe(user => {
      if(user) {
        this.isLoggedIn = true;
        this.productsService.getUserCartProductsIds()
          .subscribe(userProductIds =>  {
            this.productKeys = userProductIds;
            this.productsInfo = userProductIds;

            if(this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
              this.isCartEmpty = true;
            } else {
              this.isCartEmpty = false;
            }
          });
       }
      else {
        this.isLoggedIn = false;
      }
    });

  }
}
