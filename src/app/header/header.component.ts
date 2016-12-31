import { Component, Input } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

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
  //public isOpen: boolean = false;

  constructor(private af: AngularFire){
    this.af.auth.subscribe(user => {
      if(user) {
        this.loggedIn = true;
        this.user = user.google;
        console.log(this.user);
      }
      else {
        this.loggedIn = false;
        this.user = {};
      }
    });
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

