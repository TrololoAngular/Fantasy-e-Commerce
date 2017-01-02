import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "[wishlist-preview]",
//   inputs: ["productWishlistInfo"],
  templateUrl: "./wishlist-preview.component.html",
  styleUrls: ["./wishlist-preview.component.css"]
})
export class WishlistPreviewComponent implements OnInit {

  product: any;

  @Input("productWishlistInfo") set productWishlistInfo(_productWishlistInfo){
    this.productsService.getProductByKey(_productWishlistInfo.id)
      .subscribe(product => {
        this.product = product;
        console.log(this.product)
      });
  }


  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    //   this.productsService.getProductByKey(_productWishlistInfo.id)
    //    .subscribe(product => {
    //     this.product = product;
    //     console.log(this.product)
    //   });
  }

  get title(): string {
    return this.product.title;
  }

  get imageUrl() {
    return this.product.imageUrl;
  }

  get price() {
    return this.product.price;
  }

//   updateProductInLocalStorage(value) {
//     console.log("Value: ", value);
//   }

}
