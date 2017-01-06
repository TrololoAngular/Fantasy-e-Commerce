import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from '../shared/services/products.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductBarModule } from '../product-bar/product-bar.module';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  mainCategories: any;
  mostPopularProducts;

  constructor(private productsService: ProductsService){ }

  ngOnInit(): void {
    const mainCategories$ = this.productsService.getMainCategories();
    mainCategories$.subscribe(result => {
      this.mainCategories = result;
    });

    this.productsService.getAllProducts()
    .subscribe(products => {
        this.mostPopularProducts = products;
      })
  }



}
