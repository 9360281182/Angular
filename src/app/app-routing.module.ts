import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component'
import { CovertorComponent } from './covertor/covertor.component';
import { DateComponent } from './date/date.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'comp1',component:CalculatorComponent},
  {path:'comp2',component:CovertorComponent},
  {path:'comp3',component:DateComponent},
  {path:'comp4',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
