import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  loggedIn: Boolean = false;
  user = {};

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.items = af.database.list('/items');
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.loggedIn = true;
        this.user = user.google;
      }
      else {
        // user not logged in
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

save(newName: string, newValue: string) {
    this.items.push({ name: newName, value: newValue});
  }
}
