import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: []
})
export class ShoppingCartComponent {
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Shopping Cart";
  productKeys: any[];
  productsInfo: any[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getUserCartProductsIds()
      .subscribe(userProductIds =>  {
        console.log("userProductInfo: ", userProductIds);
        this.productKeys = userProductIds;
        this.productsInfo = userProductIds;


        if(this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
          this.isCartEmpty = true;
        } else {
          this.isCartEmpty = false;
        }
      });
  }
}
