import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
// import { StarComponent } from '../shared/star.component';
import { RatingModule } from "../shared/star.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({ 
  selector: 'app-fan-fiction-story',
  templateUrl: './fan-fiction-story.component.html',
  styleUrls: ['./fan-fiction-story.component.css']
})
export class FanFictionStoryComponent implements OnInit {
  product: any;
  productRating:number;
  pageTitle: string = "";

  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.productService.getFanFictionByKey(params['productKey'])
          .subscribe(product => {
            this.product = product;
            this.productRating = product.rating;
            //console.log("Product: ", this.product);
          })
      })
  }

  addFictionToWishlist(){
    this.productService.addFictionToWishlist(
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
  }

}
