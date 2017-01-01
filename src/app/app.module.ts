
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { CollapseModule   } from 'ng2-bootstrap';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCategoryDetailsComponent } from './home/home.category-details.component';
import { FooterComponent } from './footer/footer.component';

import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './products/product.component';
import { ProductPreviewComponent } from './categories/product-preview.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';
import { ShoppingCartComponent } from './user/cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotLoggedInComponent } from './shared/components/not-logged-in.component';

import { ProductBarComponent } from './product-bar/product-bar.component';
import { CartProductPreviewComponent } from './user/cart/cart-product-preview.component';
import { PageTitleComponent } from './shared/components/page-title.component';


//Modules
import { RatingModule } from './shared/star.component';

//Services
import { BookCategoriesService } from './book-categories/book-categories.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { ProductsService } from './shared/services/products.service';

//Pipes
import { IterateObjectsPipe } from './shared/pipes/iterate-objects.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCategoryDetailsComponent,
    ProductBarComponent,
    IterateObjectsPipe,
    FooterComponent,
    CartProductPreviewComponent,
    PageTitleComponent,
    HomeComponent,
    CategoriesComponent,
    ProductPreviewComponent,
    ProductComponent,
    BookCategoriesComponent,
    ShoppingCartComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2BootstrapModule,
    RatingModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,
    {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    BookCategoriesService,
    AuthenticationService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
