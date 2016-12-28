import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: []
})
export class ProductBarModule { }
