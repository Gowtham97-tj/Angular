import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftDetailsComponent } from './left-details/left-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MidLineComponent } from './mid-line/mid-line.component';
import { RightDetailsComponent } from './right-details/right-details.component';
import { CompAlphaComponent } from './comp-alpha/comp-alpha.component';
import { CompBetaComponent } from './comp-beta/comp-beta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftDetailsComponent,
    MidLineComponent,
    RightDetailsComponent,
    CompAlphaComponent,
    CompBetaComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
