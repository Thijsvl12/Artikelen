import { Component, OnInit } from '@angular/core';
import { Artikel, CombiArtikel } from "../../../models/artikel.model";
@Component({
  selector: 'app-samenstellen',
  templateUrl: './samenstellen.component.html',
  styleUrls: ['./samenstellen.component.scss']
})
export class SamenstellenComponent implements OnInit {

  constructor() { 
    let a = new CombiArtikel()
    console.log(a)



  }

  ngOnInit() {
  }

}
