import { Injectable } from '@angular/core';
import {Tip} from "./tip";


@Injectable({
  providedIn: 'root'
})
export class TipService{
  tip: Tip = new Tip();
  submitTip(tip: Tip): void {
    this.tip = tip;

  }
}
