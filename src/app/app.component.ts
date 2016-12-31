import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';
import { BookCategoriesService } from './book-categories/book-categories.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    BookCategoriesService
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: Boolean = false;
  user = {};

  constructor(private af: AngularFire){
    this.af.auth.subscribe(user => {
      if(user) {
        this.loggedIn = true;
        this.user = user.google;
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


}
