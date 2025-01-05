import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentDataService } from 'src/app/services/studentdata.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
 student: Student = {
  id: 0,
  name: "",
  sex: "",
  age: 0,
  department: "",
  address: "",
  bloodGroup: "",
  image: ""
 }

 constructor(private studentService: StudentDataService, private formBuilder: FormBuilder, private router: ActivatedRoute)
 {
   studentService.getStudentById(parseInt(this.router.snapshot.paramMap.get("id") || "")).subscribe((data) => {this.student = data});
 }
}
