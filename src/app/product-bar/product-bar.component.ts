import { Component } from '@angular/core';
import { CarouselModule } from 'ng2-bootstrap';

@Component({
  selector: 'app-product-bar',
  templateUrl: './product-bar.component.html',
  styleUrls: ['./product-bar.component.css']
})
export class ProductBarComponent {
  public myInterval:number = 0;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide():void {
    let newWidth = 400 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/200`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }
}