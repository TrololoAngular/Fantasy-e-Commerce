import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookCategoriesService } from '../book-categories/book-categories.service';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductBarComponent } from './../product-bar/product-bar.component';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  mainCategories: any;

  constructor(private booksService: BookCategoriesService){ }

  ngOnInit(): void {
    const mainCategories$ = this.booksService.getMainCategories();
    mainCategories$.subscribe(result => {
      this.mainCategories = result;
    });
  }

}
