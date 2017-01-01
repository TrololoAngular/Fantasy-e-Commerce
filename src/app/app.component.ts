import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){ }

  ngOnInit() {
    if(localStorage.getItem('cartItems') === null || localStorage.getItem('cartItems') === undefined) {
      var cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }
}
