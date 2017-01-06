import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './products/product.component';
import { ShoppingCartComponent } from './user/cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotLoggedInComponent } from './shared/components/not-logged-in.component';
import { NotFoundComponent } from './shared/components/404-not-found.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { FanFinctionComponent } from './fan-finction/fan-finction.component';
import { FanFictionStoryComponent } from './fan-fiction-story/fan-fiction-story.component';
import { FictionWishlistComponent } from './user/fiction-wishlist/fiction-wishlist.component';
import { ComingSoonComponent } from './shared/components/coming-soon.component';

const appRoutes: Routes = [
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'categories/:mainCategory', component: CategoriesComponent
  },
  {
    path: 'categories/:mainCategory/:subCategoryId', component: CategoriesComponent
  },
  {
    path: 'categories/:mainCategory/:subCategoryId/products/:productKey', component: ProductComponent
  },
  {
    path:"user/shopping-cart", component: ShoppingCartComponent
  },
  {
    path:"user/wishlist", component: WishlistComponent
  },
  {
    path:"user/fan-fiction-favorite-stories", component: FictionWishlistComponent
  },
  {
    path:"user/checkout", component: CheckoutComponent
  },
  {
    path:"fan-fiction", component: FanFinctionComponent
  },
  {
    path:"fan-fiction/:productKey", component: FanFictionStoryComponent
  },
  {
    path:"coming-soon", component: ComingSoonComponent
  },
  {
    path:"", component: HomeComponent
  },
  { path: '**', component: NotFoundComponent }
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
