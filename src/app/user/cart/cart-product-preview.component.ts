import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "[cart-product-preview]",
  templateUrl: "./cart-product-preview.component.html",
  styleUrls: ["./cart-product-preview.component.css"]
})
export class CartProductPreviewComponent implements OnInit {

  productQuantity: string;
  product: any;

  @Input('itemKey') itemKey:string;
  @Input("productInfo") set productInfo(_productInfo){
    this.productsService.getProductByKey(_productInfo.mainCategory,_productInfo.id)
      .subscribe(product => {
        this.product = product;
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

}
