import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: []
})
export class WishlistComponent {
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Wishlist Products";
  productKeys: any[];
  productsWishlistInfo: any[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getUserWishlistProductsIds()
      .subscribe(userProductIds =>  {
        //console.log("userProductInfo: ", userProductIds);
        this.productKeys = userProductIds;
        this.productsWishlistInfo = userProductIds;


        if(this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
          this.isCartEmpty = true;
        } else {
          this.isCartEmpty = false;
        }
      });
  }
}
