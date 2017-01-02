import { Component, Input } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { ProductsService } from '../shared/services/products.service';
import { AuthenticationService } from '../shared/services/authentication.service';

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


  constructor(private auth: AuthenticationService, private productsService: ProductsService){
    this.auth.authenticate().subscribe(user => {
      if(user) {
        this.loggedIn = true;
        this.user = user.google;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('isLoggedIn', 'true');
      }
      else {
        this.loggedIn = false;
        this.user = {};
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', 'false');
      }
    });
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')) !== undefined) {
      this.productsService.getUserCartProductsIds()
        .subscribe(productsInfo => {
          this.cartQuantity = 0;
          productsInfo.forEach(product => this.cartQuantity += +product.quantity);
        })
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }


  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}

