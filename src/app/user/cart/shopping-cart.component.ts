import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent {
  isLoggedIn: boolean;
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Shopping Cart";
  productKeys: any[];
  productsInfo: any[];

  subTotal: number;
  cartTotal: number;
  totalItems: number;

  constructor(private auth: AuthenticationService, private productsService: ProductsService){
  }

  ngOnInit() {
    this.auth.authenticate().subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.productsService.getUserCartProductsIds()
          .subscribe(userProductIds => {
            this.productKeys = userProductIds;
            this.productsInfo = userProductIds;

            if (this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
              this.isCartEmpty = true;
            } else {
              this.isCartEmpty = false;
              this.getCartTotal();
            }
          });
      }
      else {
        this.isLoggedIn = false;
      }
    });
  }

  private getCartTotal() {
    this.subTotal = 0;
    this.totalItems = 0;
    this.productsInfo.forEach(product => {
      this.productsService.getProductByKey(product.mainCategory, product.id)
        .subscribe(res => {
          this.totalItems += +product.quantity;
          this.subTotal += product.quantity * res.price;
          this.cartTotal = this.subTotal + 3;
        });
    })
  }
}
