import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component ({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent {
  categories: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.categories = af.database.list('/books');
  }
}
