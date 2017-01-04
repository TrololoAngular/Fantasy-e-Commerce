import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { RatingModule } from "../shared/star.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductsService } from '../shared/services/products.service';
import { PageTitleComponent } from '../shared/components/page-title.component';

import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { CategoryFilterPipe } from '../shared/pipes/categoryFilter.pipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  pageTitle: string;

  bookCategories: any[];
  jewelleryCategories: any[];
  clothingCategories: any[];

  products: any[];

  filterByText: string = "";
  sortProperty: string = "title";
  orderValue: string = "ascending";

  mainCategory: string;
  subCategoryId: string = "";

  private pipeSort: SortPipe = new SortPipe();
  private pipeFilter: FilterPipe = new FilterPipe();
  private pipeCategoryFilter: CategoryFilterPipe = new CategoryFilterPipe();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        if(params["mainCategory"] !== null && params['mainCategory'] !== undefined){
          this.mainCategory = params["mainCategory"];
          this.productsService.getProductsByMainCategory(params['mainCategory'])
            .subscribe(products => {
              if(params["subCategoryId"]!== null && params['subCategoryId'] !== undefined) {
                this.products = products;
                this.subCategoryId = params["subCategoryId"];
              } else {
                this.products = products;
                console.log(this.subCategoryId);
              }
            });
        } else {
          this.productsService.getAllProducts()
            .subscribe(products => this.products = products);
        }
      });

    this.productsService.getSubcategoryByType('bookCategories')
      .subscribe(categories => this.bookCategories = categories);

    this.productsService.getSubcategoryByType('jewelleryCategories')
      .subscribe(categories => this.jewelleryCategories = categories);

    this.productsService.getSubcategoryByType('clothingCategories')
      .subscribe(categories => this.clothingCategories = categories);

    switch(this.mainCategory) {
      case "books":
        this.pageTitle = "Fantasy Books";
        break;
      case "jewellery":
        this.pageTitle = "Fantasy Jewellery";
        break;
      case "category":
        this.pageTitle = "Fantasy Clothing";
        break;
    }
  }

  setTitle(titleString: string, mainCategory: string, subCategory: string, subCategoryKey: string) {
    this.mainCategory = mainCategory;
    this.subCategoryId = subCategoryKey || "";

    if(subCategory !== undefined) {
      this.pageTitle = `${titleString}: ${subCategory}`;
      this.location.replaceState(`/categories/${this.mainCategory}/${subCategoryKey}`);
      this.sortByCategory(subCategoryKey);
    } else {
      this.pageTitle = `${titleString}`;
      this.location.replaceState(`/categories/${this.mainCategory}`);
      this.sortByCategory(subCategoryKey);
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

  sortByCategory(subCategoryKey: string){
    this.subCategoryId = subCategoryKey;
    this.pipeCategoryFilter.transform(this.products, this.subCategoryId);
  }
}
