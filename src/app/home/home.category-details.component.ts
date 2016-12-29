import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IterateObjectsPipe } from '../shared/pipes/iterate-objects.pipe';
import { BookCategoriesService } from '../book-categories/book-categories.service';

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


  constructor(private booksService: BookCategoriesService){ }

  ngOnInit(){
    const subCategories$ = this.booksService.getSubcategoryByType(`${this.mainCategory.subCategories}`);
    subCategories$.subscribe(result => {
      this.subCategories = result;
      console.log("Sub categories: ", this.subCategories);
    });
  }



}
