import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class BookCategoriesService {
  constructor( private af: AngularFire) { }

  getAllBookCategories() {
    const result = this.af.database.list('/books');
    return result;
  }

  getBookCategoryByName(name: string) {
    name = name.toLowerCase();
    return this.af.database.object('/books/'+ name);
  }

}
