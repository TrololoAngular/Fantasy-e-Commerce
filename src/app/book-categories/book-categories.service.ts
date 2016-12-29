import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Observable';
import { Http } from '@angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookCategoriesService {
  constructor( private af: AngularFire) { }

  getAllBookCategories() {
    const result = this.af.database.list('/books');
    return result;
  }

  getMainCategories(){
    const mainCategories = this.af.database.list('/mainCategories');
    return mainCategories;
  }

  getBookSubcategories() {
    const bookCategories = this.af.database.list('/bookCategories');
    return bookCategories;
  }

  getSubcategoryByType(type: string): Observable<any> {
    const subCategory = this.af.database.object(`/${type}`);
    return subCategory;
  }
}
