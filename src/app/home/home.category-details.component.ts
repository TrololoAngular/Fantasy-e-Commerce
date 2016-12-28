import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Component ({
  selector: 'category-details',
  templateUrl: "./home.category-details.component.html",
  styleUrls:["./home.category-details.component.css"]
})
export class HomeCategoryDetailsComponent {
  @Input()
  category: any;
}
