import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmpComponent } from './emp/emp.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,EmpComponent,GoalsComponent ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
