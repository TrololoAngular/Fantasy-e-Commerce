import { Component } from '@angular/core';
import { BookCategoriesService } from '../book-categories/book-categories.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  bookCategory: FirebaseListObservable<any[]>;

  constructor(private booksService: BookCategoriesService){ }

  ngOnInit(): void {
    const bookCat$ = this.booksService.getAllBookCategories();
    bookCat$.subscribe(result => {
      this.bookCategory = result;
      console.log("Book categories: ", this.bookCategory);
    });
  }

}
