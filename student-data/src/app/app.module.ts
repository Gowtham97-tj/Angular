import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentHeaderComponent,
    StudentTableComponent,
    StudentSidebarComponent,
    AddStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
