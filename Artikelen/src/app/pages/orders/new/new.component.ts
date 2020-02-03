import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from "../../../models/order.model";
import {take} from "rxjs/operators"
import { DataService } from 'src/app/services/data.service';
import { Artikel } from 'src/app/models/artikel.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  aArtikelen
  aArtikel
  constructor(private ds: DataService) { 
    this.aArtikelen = ds.getArtikelen()
  }

  ngOnInit() {
  }

}
