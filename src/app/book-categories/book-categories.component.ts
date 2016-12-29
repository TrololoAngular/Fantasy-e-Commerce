
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BookCategoriesService } from './book-categories.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.css']
})
export class BookCategoriesComponent{
  categoryName: string;
  category: any;

  constructor(
    private categoryService: BookCategoriesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.route.params
    .subscribe((parameters) => this.categoryName = parameters['categoryName']);

    const category$ = this.categoryService.getSubcategoryByType(this.categoryName);
    category$.subscribe(result => {
      this.category = result;
    });

  }

  goBack(): void {
    this.location.back();
  }

}
