import { Component } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { StudentDataService } from '../services/studentdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  students: Student[] = []

  constructor(private studentService: StudentDataService, private router: Router)
  {
    studentService.getStudentDetails().subscribe((data) => this.students = data);
  }

  DeleteStudent(studentId: number)
  {
    this.studentService.deleteStudent(studentId).subscribe();
    alert('Delete method called!');
    this.router.navigate(['/students'])
  }
}
