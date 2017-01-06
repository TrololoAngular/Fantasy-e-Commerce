import { Component, ViewContainerRef, Input } from '@angular/core';
import { StarComponent } from '../shared/star.component';
import { RatingModule } from "../shared/star.component";
import { SortPipe } from '../shared/pipes/sort.pipe';
import { ProductsService } from '../shared/services/products.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product-bar',
  templateUrl: './product-bar.component.html',
  styleUrls: ['./product-bar.component.css']
})
export class ProductBarComponent {
  @Input("starsCount") starsCount: number;
  @Input('mostPopularProducts') mostPopularProducts: any[];

  private pipeSort: SortPipe = new SortPipe();

  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef,
    private productsService: ProductsService) {
      this.toastr.setRootViewContainerRef(vRef);
  }

  addProductToCart(productTitle, productKey, productCategory){
    if(this.productIsInCart(productKey)) {
      this.toastr.info("Product is already in cart");
    } else{
      this.productsService.addProductToCart(
        "books",
        JSON.parse(localStorage.getItem('user')).uid,
        productKey,
        productCategory);
      this.toastr.info(`${productTitle} has been added to your cart.`, 'Fantastic!');
    }
  }

  productIsInCart(productKey ): boolean {
    var result = false;

    this.productsService.getUserCartProductsIds()
      .subscribe(productsInfo => {
        productsInfo.forEach(productInfo => {
          if(productInfo.id == productKey && productInfo.mainCategory == 'books') {
            result = true;
          }
        });
      });

    return result;
  }

}
