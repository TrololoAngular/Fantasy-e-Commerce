import { Component, ViewContainerRef, OnInit, Input } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input("product") product: any;
  @Input("mainCategory") mainCategory: string;
  @Input("subCategory") subCategory: string;

  isInCart: boolean = false;

  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef,
    private productsService: ProductsService) {
      this.toastr.setRootViewContainerRef(vRef);
  }

  get title(): string {
    return this.product.title;
  }

  get imageUrl(): string {
    return this.product.imageUrl;
  }

  get author(): string {
    return this.product.author;
  }

  get rating(): number {
    return this.product.rating;
  }

  get price(): number {
    return this.product.price;
  }

  ngOnInit() { }

  addProductToCart(){
    if(this.productIsInCart()) {
      this.isInCart = true;
      this.toastr.info("Product is already in cart");
    } else{
      this.isInCart = false;
      this.productsService.addProductToCart(
        this.mainCategory,
        JSON.parse(localStorage.getItem('user')).uid,
        this.product.$key,
        1);
      this.toastr.info(`${this.product.title} has been added to your cart.`, 'Fantastic!');
    }
  }

  productIsInCart(): boolean {
    var result = false;

    this.productsService.getUserCartProductsIds()
      .subscribe(productsInfo => {
        productsInfo.forEach(productInfo => {
          if(productInfo.id == this.product.$key && productInfo.mainCategory == this.mainCategory) {
            result = true;
          }
        });
      });

    return result;
  }

}
