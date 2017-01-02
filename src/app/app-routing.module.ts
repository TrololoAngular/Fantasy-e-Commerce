import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './products/product.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { ShoppingCartComponent } from './user/cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotLoggedInComponent } from './shared/components/not-logged-in.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';

const appRoutes: Routes = [
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'products', component: ProductComponent
  },
  {
    path: 'books/categories/:categoryName', component: BookCategoriesComponent
  },
  {
    path:"user/shopping-cart", component: ShoppingCartComponent
  },
  {
    path:"wishlist", component: WishlistComponent
  },
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
