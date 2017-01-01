import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor( private af: AngularFire) { }

  isLoggedIn() {
    return this.af.auth;
  }

  getUserInfo() {
    this.af.auth.subscribe(user => {
      if (user) {
        console.log("Is logged in: ", user.google);
        return user.google;
      }
      else {
        console.log("Is not logged in: ", user.google);
        return null;
      }
    });
  }

  login() {

    this.af.auth.login({
      provider: AuthProviders.Google
    });
    console.log("Logged in");

  }

  logout() {
    this.af.auth.logout();
    console.log("Logged out");
  }
}
