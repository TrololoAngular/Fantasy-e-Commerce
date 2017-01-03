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
  mainCategory: string;

  @Input('itemKey') itemKey:string;
  @Input("productWishlistInfo") set productWishlistInfo(_productWishlistInfo){

    this.mainCategory = _productWishlistInfo.mainCategory;
    this.productsService.getProductByKey(_productWishlistInfo.mainCategory, _productWishlistInfo.id)
      .subscribe(product => {
        this.product = product;
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

  get price() {
    return this.product.price;
  }

  addProductToCart(){
    this.productsService.addProductToCart(
      this.mainCategory,
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key,
      1);
  }

  removeProductFromWishlist(itemKey: string) {
    this.productsService.removeItemFromWishlist(itemKey);
  }

}
