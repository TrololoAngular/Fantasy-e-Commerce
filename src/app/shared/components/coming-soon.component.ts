import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: "coming-soon",
  templateUrl: "./coming-soon.component.html",
  styleUrls: ["./coming-soon.component.css"]
})
export class ComingSoonComponent  implements OnInit {

  constructor(private _location: Location){ }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
