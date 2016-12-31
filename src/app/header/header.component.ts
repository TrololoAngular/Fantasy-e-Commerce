import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:["./header.component.css"]
})
export class HeaderComponent{
  public isMenuCollapsed: boolean = true;
  public isNotificationCollapsed: boolean = true;
  public isBooksCollapsed: boolean = true;
  public isJewelleryCollapsed: boolean = true;
  public isClothingCollapsed: boolean = true;
  public isOpen: boolean = false;

  constructor(){}

  ngOnInit() {
  }

  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}

