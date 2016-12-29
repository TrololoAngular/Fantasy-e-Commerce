import { Component } from '@angular/core';

declare var $: any;

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

  ngOnInit() {
    var register = $(".register");
    console.log(register);
  }

  public alert() {
    var register = $(".register");
  }
}

