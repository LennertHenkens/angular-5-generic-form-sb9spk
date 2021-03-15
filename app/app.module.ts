import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import {SpinnerModule} from 'primeng/spinner';

import { AppComponent } from './app.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { GenericInputRow } from './generic-form/generic-input-row.component';

@NgModule({
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule, 
    AutoCompleteModule, DropdownModule, InputTextModule, CheckboxModule, SpinnerModule
  ],
  declarations: [AppComponent, GenericFormComponent, GenericInputRow],
  bootstrap: [AppComponent]
})
export class AppModule { }
