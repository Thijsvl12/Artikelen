import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from "../../../models/order.model";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { 
    let d = new Order()
    d.iOrderItem(new OrderItem('0', 3.2, 2222222222222))
    console.log(d.sSubtotaal())
    console.log(d.sBtw(), 'Btw')

  }

  ngOnInit() {
  }

}
