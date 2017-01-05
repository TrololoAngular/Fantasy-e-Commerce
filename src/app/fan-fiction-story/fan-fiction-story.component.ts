import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
// import { StarComponent } from '../shared/star.component';
import { RatingModule } from "../shared/star.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-fan-fiction-story',
  templateUrl: './fan-fiction-story.component.html',
  styleUrls: ['./fan-fiction-story.component.css']
})
export class FanFictionStoryComponent implements OnInit {
  product: any;
  productRating:number;
  pageTitle: string = "";

  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
      this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.productService.getFanFictionByKey(params['productKey'])
          .subscribe(product => {
            this.product = product;
            this.productRating = product.rating;
          })
      })
  }

  addFictionToWishlist(){
    this.productService.addFictionToWishlist(
      JSON.parse(localStorage.getItem('user')).uid,
      this.product.$key);
    this.toastr.info(`${this.product.title} has been moved to your favourite fan fiction list.`, 'Fantastic!');
  }



}
