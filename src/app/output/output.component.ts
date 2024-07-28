import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Tip} from "../tip";
import {TipService} from "../tip-service";
import {AppModule} from "../app.module";


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit {
  tipdata: Tip;
  calculatedtip: number = 0;
  total: number = 0;

  constructor(service: TipService) {
    this.tipdata = service.tip;
  }
  ngOnInit(): void {
    this.calculatedtip = this.tipdata.bill * this.tipdata.quality;

    if (this.tipdata.roundup) {
      this.calculatedtip = Math.ceil(this.calculatedtip);
    }
    else{
      this.calculatedtip = parseFloat(this.calculatedtip.toFixed(2));
    }
    this.total = this.calculatedtip + this.tipdata.bill;

  }
}
