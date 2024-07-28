import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatCard} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatCard,
    MatToolbar,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
