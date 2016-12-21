import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

}
