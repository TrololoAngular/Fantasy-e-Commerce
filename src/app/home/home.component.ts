import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Observable';
import { Http } from '@angular2/http';
import 'rxjs/add/operator/map';

import { BookCategoriesService } from '../book-categories/book-categories.service';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductBarComponent } from './../product-bar/product-bar.component';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  mainCategories: FirebaseListObservable<any[]>;

  constructor(private booksService: BookCategoriesService){ }

  ngOnInit(): void {
    const mainCategories$ = this.booksService.getMainCategories();
    mainCategories$.subscribe(result => {
      this.mainCategories = result;
    });
  }

}
