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

  @Input("productInfo") set productInfo(_productInfo){
    this.productsService.getProductByKey(_productInfo.mainCategory,_productInfo.id)
      .subscribe(product => {
        this.product = product;
        this.productQuantity = _productInfo.quantity;

        console.log("Product: ", this.product);
        console.log("Product info: ", _productInfo);
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

  updateProductInLocalStorage(value) {
    console.log("Value: ", value);
  }

}
