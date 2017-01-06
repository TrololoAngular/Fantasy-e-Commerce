import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "[cart-product-preview]",
  templateUrl: "./cart-product-preview.component.html",
  styleUrls: ["./cart-product-preview.component.css"]
})
export class CartProductPreviewComponent implements OnInit {

  productQuantity: string;
  productId: string;
  mainCategory: string;
  product: any;
  subCategory: string;

  @Input('itemKey') itemKey:string;
  @Input("productInfo") set productInfo(_productInfo){
    this.productId = _productInfo.id;
    this.mainCategory = _productInfo.mainCategory;
    this.productsService.getProductByKey(_productInfo.mainCategory,_productInfo.id)
      .subscribe(product => {
        this.product = product;
        this.productId = product.$key;
        this.subCategory = product.bookCategory;
        this.productQuantity = _productInfo.quantity;
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


  removeProductFromCart(itemKey: string) {
    this.productsService.removeItemFromCart(itemKey);
  }

  changeItemQuantity(productId, mainCategory, value, itemKey){
    var newItem = {
      id: productId,
      quantity: value,
      mainCategory: mainCategory
    };

    if(value > 0){
      this.productsService.updateItemQuantity(newItem, itemKey);
    } else {
      this.removeProductFromCart(itemKey);
    }

  }

}
