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

  ngOnInit() {

  }

  addProductToCart(){
    this.productsService.addProductToCart(
      this.mainCategory,
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key,
      1);
    this.toastr.info(`${this.product.title} has been added to your cart.`, 'Fantastic!');
  }

  addProductToWishlist(){
    this.productsService.addProductToWishlist(
      this.mainCategory,
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
    this.toastr.info(`${this.product.title} has been added to your wishlist.`,`Dreamy!`);
  }
}
