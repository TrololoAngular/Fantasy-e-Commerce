import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "[fiction-wishlist-preview]",
//   inputs: ["productWishlistInfo"],
  templateUrl: "./fiction-wishlist-preview.component.html",
  styleUrls: ["./fiction-wishlist-preview.component.css"]
})
export class FictionWishlistPreviewComponent implements OnInit {

  product: any;

  @Input("fictionWishlistInfo") set fictionWishlistInfo(_fictionWishlistInfo){
    this.productsService.getFanFictionByKey(_fictionWishlistInfo.id) 
      .subscribe(product => {
        this.product = product;
        //console.log(this.product)
      });
  }


  constructor(private productsService: ProductsService) { }

  ngOnInit() {

  }

  get title(): string {
    return this.product.title;
  }

  get imageUrl() {
    return this.product.imageUrl;
  }

  removeProductFromWishlist() {
    console.log("Remove product from wishlist");
  }

}
