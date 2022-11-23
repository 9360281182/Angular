import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CovertorComponent } from './covertor/covertor.component';
import { DateComponent } from './date/date.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CovertorComponent,
    DateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
