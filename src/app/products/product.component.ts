import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = "";
  product: any;
  productQuantity: number = 1;

  constructor(private productService: ProductsService){
  }

  ngOnInit() {
    this.productService.getProductByKey("1")
    .subscribe(product => {
        this.product = product;
        console.log("Product: ", this.product);
      })
  }


  addProductToCart(){
      this.productService.addProductToCart(localStorage.getItem('userKey'), "3" , this.productQuantity );
  }


}
