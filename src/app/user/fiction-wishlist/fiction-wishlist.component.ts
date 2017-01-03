import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title.component';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "fiction-wishlist",
  templateUrl: "./fiction-wishlist.component.html",
  styleUrls: []
})
export class FictionWishlistComponent {
  isCartEmpty: boolean = false;
  pageTitle: string = "Your Fan Fiction Favorite Stories";
  productKeys: any[];
  fictionWishlistInfo: any[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getUserWishlistFictionIds()
      .subscribe(userWhishlistIds =>  {
        console.log("userProductInfo: ", userWhishlistIds);
        this.productKeys = userWhishlistIds;
        this.fictionWishlistInfo = userWhishlistIds; 


        if(this.productKeys.length == 0 || this.productKeys == null || this.productKeys == undefined) {
          this.isCartEmpty = true;
        } else {
          this.isCartEmpty = false;
        }
      });
  }
}
