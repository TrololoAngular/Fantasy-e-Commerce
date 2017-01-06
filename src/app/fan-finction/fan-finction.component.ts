import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProductsService } from '../shared/services/products.service';
import { RatingModule } from "../shared/star.component";

@Component({
  selector: 'app-fan-finction',
  templateUrl: './fan-finction.component.html',
  styleUrls: ['./fan-finction.component.css']
})
export class FanFinctionComponent implements OnInit {

  pageTitle: string = "Fan Fiction";
  fanFiction: any[];
  products: any[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllFanFiction()
      .subscribe(products => this.products = products);
  }

}
