import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';

const routes: Routes = [
  {path: '', component: StudentTableComponent},
  {path: 'students', component: StudentTableComponent },
  {path: 'students/add', component: AddStudentComponent },
  {path: 'students/view/:id', component: ViewStudentComponent},
  {path: 'students/edit/:id', component: EditStudentComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
