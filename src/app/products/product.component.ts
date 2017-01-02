import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
// import { StarComponent } from '../shared/star.component';
import { RatingModule } from "../shared/star.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = "";
  product: any;
  productRating:number;
  productQuantity: number = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.productService.getProductByKey(params['productKey'])
          .subscribe(product => {
            this.product = product;
            this.productRating = product.rating;
            console.log("Product: ", this.product);
          })
      })
  }

  addProductToCart(){
      this.productService.addProductToCart(
        JSON.parse(localStorage.getItem('user')).uid,
        this.product.$key,
        this.productQuantity);
  }

  addProductToWishlist(){
    this.productService.addProductToWishlist(
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
  }


}
