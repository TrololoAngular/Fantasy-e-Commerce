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

  getUserCartProductsIds(){
    return this.af.database.list(`userCartItems/${localStorage.getItem('userKey')}`);
  }

  getUserWishlistProductsIds(){
    return this.af.database.list(`userWishListItems/${JSON.parse(localStorage.getItem('user')).uid}`);
  }

  getProductByKey(productKey: string) {
    return this.af.database.object(`books/${productKey}`);
  }

  getSubcategoryByType(type: string): Observable<any> {
    const subCategory = this.af.database.object(`/${type}`);
    return subCategory;
  }


  //updateProductQuantityInCart(userKey: string, productKey: string, newProductQuantity: string){
  //    this.af.database.object(`books/${userKey}/`)
  //}

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
