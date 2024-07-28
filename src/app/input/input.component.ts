import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TipService} from "../tip-service";
import {Tip} from "../Tip";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',

})
export class InputComponent {

  tipdata: Tip = new Tip();
  constructor(private router: Router, private service: TipService) {}


  onSubmit(): void {
    this.router.navigate(["/output"]);
    this.service.submitTip(this.tipdata)

  }
}

