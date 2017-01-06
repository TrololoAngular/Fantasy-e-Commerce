import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductBarComponent } from './product-bar.component';
import { RatingModule } from "../shared/star.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  declarations: [
    ProductBarComponent
  ],
  exports:[
    ProductBarComponent
  ]
})
export class ProductBarModule { }
