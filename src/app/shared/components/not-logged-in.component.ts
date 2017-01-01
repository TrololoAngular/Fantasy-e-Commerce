import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: "not-logged-in",
  templateUrl: "./not-logged-in.component.html",
  styleUrls: ["./not-logged-in.component.css"]
})
export class NotLoggedInComponent  implements OnInit {
  loggedIn: Boolean = false;
  pageTitle:string = "Oops, it seems you are not logged in."

  constructor(private auth: AuthenticationService){ }

  ngOnInit() {
    this.auth.isLoggedIn()
    .subscribe((user) => {
        if(user) {
          this.loggedIn = true;
        }
        else {
          this.loggedIn = false;
        }
      })
  }

  login() {
    this.auth.login();
  }
}
