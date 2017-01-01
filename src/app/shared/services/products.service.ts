import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  constructor( private af: AngularFire) { }

  getUserCartProductsIds(){
    return this.af.database.list(`userCartItems/${localStorage.getItem('userKey')}`);
  }

  getProductByKey(productKey: string) {
    return this.af.database.object(`books/${productKey}`);
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
  //
  //updateLocalStorageCartItem(productKey: string, newProductQuantity: string) {
  //  var existingCartItems = JSON.parse(localStorage.getItem('cartItems')),
  //  //    productCurrentState = existingCartItems.filter( currentProduct => {
  //  //  return currentProduct.$key == productKey;
  //  //});
  //
  //  var currentProductIndex = existingCartItems.findIndex(x => x.$key == productKey);
  //  existingCartItems[currentProductIndex].quantity = newProductQuantity;
  //
  //  localStorage.setItem('cartItems') = JSON.stringify(existingCartItems);
  //
  //}
}
