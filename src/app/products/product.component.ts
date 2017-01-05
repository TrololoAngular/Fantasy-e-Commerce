import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
// import { StarComponent } from '../shared/star.component';
import { RatingModule } from "../shared/star.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
  mainCategory: string;

  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router){
      this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.productService.getProductByKey(params['mainCategory'],params['productKey'])
          .subscribe(product => {
            this.mainCategory =params['mainCategory'];
            this.product = product;
            this.productRating = product.rating;
          })
      })
  }

  addProductToCart(){
      this.productService.addProductToCart(
        this.mainCategory,
        JSON.parse(localStorage.getItem('user')).uid,
        this.product.$key,
        this.productQuantity);
        this.toastr.info(`${this.product.title} has been added to your cart.`, 'Fantastic!');
  }

  addProductToWishlist(){
    this.productService.addProductToWishlist(
      this.mainCategory,
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
      this.toastr.info(
        `${this.product.title} has been added to your wishlist.`,`Dreamy!`);

  }


}
