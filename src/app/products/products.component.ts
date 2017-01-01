import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productQuantity: number = 1;

  constructor(private productService: ProductsService){
  }

  ngOnInit() {
  }


  addProductToCart(){
      this.productService.addProductToCart(localStorage.getItem('userKey'), "3" , this.productQuantity );
  }


}
