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

  authenticate() {
    return this.af.auth;
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
