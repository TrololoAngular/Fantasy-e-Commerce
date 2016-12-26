import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.css']
})
export class BookCategoriesComponent implements OnInit {
  category:  FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire,
    private route: ActivatedRoute,
    private location: Location
  ) {  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.af.database.list('books/'+params['categoryName']))
      .subscribe(categories => this.category = categories);
  }

}
