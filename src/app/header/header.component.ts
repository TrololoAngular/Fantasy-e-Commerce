import { Component, Input } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { ProductsService } from '../shared/services/products.service';

declare var $: any;

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:["./header.component.css"]
})
export class HeaderComponent{
  loggedIn: Boolean = false;
  user = {};

  public isMenuCollapsed: boolean = true;
  public isNotificationCollapsed: boolean = true;
  public isBooksCollapsed: boolean = true;
  public isJewelleryCollapsed: boolean = true;
  public isClothingCollapsed: boolean = true;
  public isUserCollapsed: boolean = true;
  public cartQuantity: number = 0;
  public cartProductsInfo: any[];


  constructor(private af: AngularFire, private productsService: ProductsService){
    this.af.auth.subscribe(user => {
      if(user) {
        this.loggedIn = true;
        this.user = user.google;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
      else {
        this.loggedIn = false;
        this.user = {};
      }
    });
  }

  ngOnInit() {
    this.productsService.getUserCartProductsIds()
      .subscribe(productsInfo => {
        this.cartQuantity = 0;
        productsInfo.forEach(product => this.cartQuantity += +product.quantity);
        console.log("Quantity: ", this.cartQuantity);
      })
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    this.af.auth.logout();
  }



  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}

