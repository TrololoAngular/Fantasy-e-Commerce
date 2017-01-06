import { Component, ViewContainerRef, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: "[wishlist-preview]",
  templateUrl: "./wishlist-preview.component.html",
  styleUrls: ["./wishlist-preview.component.css"]
})
export class WishlistPreviewComponent implements OnInit {

  product: any;
  mainCategory: string;
  subCategory: string;
  productKey: string;
  isInCart:boolean = false;

  @Input('itemKey') itemKey:string;
  @Input("productWishlistInfo") set productWishlistInfo(_productWishlistInfo){
    this.mainCategory = _productWishlistInfo.mainCategory;
    this.productsService.getProductByKey(_productWishlistInfo.mainCategory, _productWishlistInfo.id)
      .subscribe(product => {
        this.product = product;
        this.subCategory = product.bookCategory;
        this.productKey = product.$key;
        this.isInCart = this.productIsInCart(this.product.$key);
      });
  }

  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef,
    private productsService: ProductsService) {
      this.toastr.setRootViewContainerRef(vRef);
  }

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

  addProductToCart(itemKey){
    if(this.productIsInCart(this.product.$key)) {
      this.toastr.info("Product is already in cart");
    } else{
      this.productsService.addProductToCart(
        this.mainCategory,
        JSON.parse(localStorage.getItem('user')).uid,
        this.product.$key,
        1);
      this.toastr.info(`${this.product.title} has been moved to your cart.`, 'Fantastic!');
    }
  }

  productIsInCart(productKey ): boolean {
    var result = false;

    this.productsService.getUserCartProductsIds()
      .subscribe(productsInfo => {
        productsInfo.forEach(productInfo => {
          if(productInfo.id == productKey && productInfo.mainCategory == this.mainCategory) {
            result = true;
          }
        });
      });

    return result;
  }

  removeProductFromWishlist(itemKey: string) {
    this.productsService.removeItemFromWishlist(itemKey);
  }

}
