import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rated: true

  constructor() { }

  ngOnInit() {
  }

  setRated(){
    this.rated = true
  }

}
