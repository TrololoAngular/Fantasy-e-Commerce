import { Component, OnInit } from '@angular/core';

@Component({
  selector: "not-found",
  templateUrl: "./404-not-found.component.html",
  styleUrls: ["./404-not-found.component.css"]
})
export class NotFoundComponent  implements OnInit {
  pageTitle:string = "404, Cannot find any more.";

  constructor(){ }

  ngOnInit() {
   }

}
