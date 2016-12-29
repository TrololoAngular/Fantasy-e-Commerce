import { Component } from '@angular/core';
import { BookCategoriesService } from '../book-categories/book-categories.service';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductBarComponent } from './../product-bar/product-bar.component';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  bookCategory: FirebaseListObservable<any[]>;
  jewelleryCategory: FirebaseListObservable<any[]>;

  constructor(private booksService: BookCategoriesService){ }

  ngOnInit(): void {
    const bookCat$ = this.booksService.getAllBookCategories();
    bookCat$.subscribe(result => {
      this.bookCategory = result;
    });

    const jewelleryCat$ = this.booksService.getJewelleryCategory();
    jewelleryCat$.subscribe(result => {
      this.jewelleryCategory = result;
      console.log("Jewellery: ", this.jewelleryCategory);
    });
  }

}
