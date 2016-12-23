import { Component } from '@angular/core';

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:["./header.component.css"]
})
export class HeaderComponent{
  public disabled:boolean = false;
  public status:{isCollapsed:boolean} = {isCollapsed: false};

  public expanded(event:any):void {
    console.log();
  }
}

