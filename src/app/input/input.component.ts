import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TipService} from "../tip-service";
import {Tip} from "../tip";
import {FormsModule} from "@angular/forms";
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard} from "@angular/material/card";
import {MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  imports: [
    MatToolbar,
    MatCard,
    FormsModule,
    MatFormField,
    MatLabel,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatButton,
    MatInput,
    MatError,

  ],
  standalone: true

})
export class InputComponent {

  tipdata: Tip = new Tip();
  constructor(private router: Router, private service: TipService) {}


  onSubmit(): void {
    this.service.submitTip(this.tipdata)
    this.router.navigate(["/output"]);
  }
}

