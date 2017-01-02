import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  constructor( private af: AngularFire) { }

  getAllProducts() {
    return this.af.database.list('/books');
  }

  getAllFanFiction() {
    return this.af.database.list('/fanFiction');
  }

  getUserCartProductsIds(){
    if(JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')) !== undefined) {
      return this.af.database.list(`userCartItems/${JSON.parse(localStorage.getItem('user')).uid}`);
    }
  }

  getUserWishlistProductsIds(){
    if(JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')) !== undefined) {
      return this.af.database.list(`userWishListItems/${JSON.parse(localStorage.getItem('user')).uid}`);
    }
  }

  getProductByKey(productKey: string) {
    return this.af.database.object(`books/${productKey}`);
  }

  getFanFictionByKey(productKey: string) {
    return this.af.database.object(`fanFiction/${productKey}`);
  }

  getSubcategoryByType(type: string): Observable<any> {
    const subCategory = this.af.database.object(`/${type}`);
    return subCategory;
  }

  addProductToCart(userKey: string, productKey: string, productQuantity: number) {
    var productInfo = {
      id: productKey,
      quantity: productQuantity
    };
    this.af.database.list(`userCartItems/${userKey}`).push(productInfo);
  }

  addProductToWishlist(userKey: string, productKey: string) {
    var productWishlistInfo = {
      id: productKey
    };
    this.af.database.list(`userWishListItems/${userKey}`).push(productWishlistInfo);
  }

}
