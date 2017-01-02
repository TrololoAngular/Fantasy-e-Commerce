import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductsService } from '../shared/services/products.service';

import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  pageTitle: string = "Fantasy Books";
  bookCategories: any[];
  jewelleryCategories: any[];
  clothingCategories: any[];
  products: any[];
  filterByText: string = "";
  sortProperty: string = "title";
  orderValue: string = "ascending";

  private pipeSort: SortPipe = new SortPipe();
  private pipeFilter: FilterPipe = new FilterPipe();

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

  setTitle(mainCategory: string, subCategory: string) {
    if(subCategory !== undefined) {
      this.pageTitle = `${mainCategory}: ${subCategory}`;
    } else {
      this.pageTitle = `${mainCategory}`;
    }
  }

  onSearchInput(searchInput: string) {
    this.filterByText = searchInput;
    this.pipeFilter.transform(this.products, searchInput);
  }

  sortByProperty(sortValue: string) {
    this.sortProperty = sortValue;
    this.pipeSort.transform(this.products, [this.sortProperty.toLowerCase(), this.orderValue.toLowerCase()]);
  }

  Order(orderValue: string) {
    this.orderValue = orderValue;
    this.pipeSort.transform(this.products, [this.sortProperty.toLowerCase(), this.orderValue.toLowerCase()]);
  }

}
