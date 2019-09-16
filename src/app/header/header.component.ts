import 'bootstrap/dist/js/bootstrap.bundle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myNumber: number;
  myString: number;
  collapsed = false;

  constructor() {
    this.myNumber = 6;
    this.myString = 6;

    const moo = this.myNumber === this.myString ? 'moo' : 'bla';
  }

  ngOnInit() {
  }
}
