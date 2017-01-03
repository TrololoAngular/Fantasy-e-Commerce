import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input("product") product: any;
  @Input("mainCategory") mainCategory: string;
  @Input("subCategory") subCategory: string;

  constructor(private productsService: ProductsService) { }

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
  }

  addProductToWishlist(){
    this.productsService.addProductToWishlist(
      this.mainCategory,
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
  }
}
