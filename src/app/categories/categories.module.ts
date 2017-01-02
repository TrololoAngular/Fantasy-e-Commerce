import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoriesComponent }    from './categories.component';
import { ProductPreviewComponent }  from './product-preview.component';
import { ProductsService } from '../shared/services/products.service';
//import { PageTitle } from './../shared/components/page-title.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    ProductPreviewComponent
    //PageTitle
  ],
  providers: [
    ProductsService
  ]
})
export class CategoriesModule {}
