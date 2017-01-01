
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/tabs';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import { CollapseModule   } from 'ng2-bootstrap';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

//Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeCategoryDetailsComponent } from './home/home.category-details.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { StarComponent } from './shared/star.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBarComponent } from './product-bar/product-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShoppingCartComponent } from './user/cart/shopping-cart.component';
import { CartProductPreviewComponent } from './user/cart/cart-product-preview.component';
import { PageTitleComponent } from './shared/components/page-title.component';
import { NotLoggedInComponent } from './shared/components/not-logged-in.component';

//Services
import { BookCategoriesService } from './book-categories/book-categories.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { ProductsService } from './shared/services/products.service';

//Pipes
import { IterateObjectsPipe } from './shared/pipes/iterate-objects.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    HomeCategoryDetailsComponent,
    BookCategoriesComponent,
    ProductBarComponent,
    CategoriesComponent,
    IterateObjectsPipe,
    StarComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartProductPreviewComponent,
    PageTitleComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,
    {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot([
    {
      path: 'categories',
      component: CategoriesComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'books/categories/:categoryName',
      component: BookCategoriesComponent
    },
    {
      path:"",
      component: HomeComponent
    },
    {
      path:"user/shopping-cart",
      component: ShoppingCartComponent
    }
])
  ],
  providers: [
    BookCategoriesService,
    AuthenticationService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
