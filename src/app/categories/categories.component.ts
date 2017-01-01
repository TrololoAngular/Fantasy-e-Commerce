import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  pageTitle: string = "Category page";
  bookCategories: FirebaseListObservable<any[]>;
  jewelleryCategories: FirebaseListObservable<any[]>;
  clothingCategories: FirebaseListObservable<any[]>;
  products: FirebaseListObservable<any[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getSubcategoryByType('bookCategories')
      .subscribe(categories => this.bookCategories = categories);

    this.productsService.getSubcategoryByType('jewelleryCategories')
      .subscribe(categories => this.jewelleryCategories = categories);

    this.productsService.getSubcategoryByType('clothingCategories')
      .subscribe(categories => this.clothingCategories = categories);

    this.productsService.getAllProducts()
      .subscribe(products => this.products = products);
  }

}
