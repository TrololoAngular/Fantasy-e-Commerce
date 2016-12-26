import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule   } from 'ng2-bootstrap';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    BookCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule  .forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,
    {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot([
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
    }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
