import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './products/product.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { ShoppingCartComponent } from './user/cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotLoggedInComponent } from './shared/components/not-logged-in.component';
import { CheckoutComponent } from './user/checkout/checkout.component';

const appRoutes: Routes = [
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'products/:productKey', component: ProductComponent
  },
  {
    path: 'books/categories/:categoryName', component: BookCategoriesComponent
  },
  {
    path:"user/shopping-cart", component: ShoppingCartComponent
  },
  {
    path:"user/shopping-cart/checkout", component: CheckoutComponent
  }
  {
    path:"", component: HomeComponent
  },
  { path: '**', component: NotLoggedInComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
