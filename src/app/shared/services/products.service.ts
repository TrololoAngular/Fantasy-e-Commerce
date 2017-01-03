import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  constructor( private af: AngularFire) { }

  getMainCategories(){
    return this.af.database.list('/mainCategories');
  }

  getProductsByMainCategory(mainCategory: string){
    return this.af.database.list(mainCategory);
  }

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

  getProductByKey(productType: string, productKey: string) {
    return this.af.database.object(`${productType}/${productKey}`);
  }

  getFanFictionByKey(productKey: string) {
    return this.af.database.object(`fanFiction/${productKey}`);
  }

  getSubcategoryByType(type: string): Observable<any> {
    const subCategory = this.af.database.object(`/${type}`);
    return subCategory;
  }

  addProductToCart(mainCategory: string, userKey: string, productKey: string, productQuantity: number) {
    var productInfo = {
      mainCategory: mainCategory,
      id: productKey,
      quantity: productQuantity
    };
    this.af.database.list(`userCartItems/${userKey}`).push(productInfo);
  }

  addProductToWishlist(mainCategory: string, userKey: string, productKey: string) {
    var productWishlistInfo = {
      mainCategory: mainCategory,
      id: productKey
    };
    this.af.database.list(`userWishListItems/${userKey}`).push(productWishlistInfo);
  }

}
