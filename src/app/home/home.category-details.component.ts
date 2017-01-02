import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IterateObjectsPipe } from '../shared/pipes/iterate-objects.pipe';
import { ProductsService } from '../shared/services/products.service';

@Component ({
  selector: 'category-details',
  templateUrl: "./home.category-details.component.html",
  styleUrls:["./home.category-details.component.css"]
})
export class HomeCategoryDetailsComponent {

  subCategories: FirebaseListObservable<any[]>;
  leftPosition: boolean;

  @Input()
    mainCategory: any;


  constructor(private productsService: ProductsService){ }

  ngOnInit(){
    const subCategories$ = this.productsService.getSubcategoryByType(`${this.mainCategory.subCategories}`);
    subCategories$.subscribe(result => {
      this.subCategories = result;
    });
  }



}
