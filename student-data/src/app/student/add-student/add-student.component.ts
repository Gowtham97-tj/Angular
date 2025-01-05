import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentDataService } from 'src/app/services/studentdata.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
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
  
     profileForm = new FormGroup({
      id: new FormControl(this.student.id),
      name: new FormControl(this.student.name),
      age: new FormControl(this.student.age),
      sex: new FormControl(this.student.sex),
      department: new FormControl(this.student.department),
      address: new FormControl(this.student.address),
      bloodgroup: new FormControl(this.student.bloodGroup),
      image: new FormControl(this.student.image)
    });
    

  constructor(private studentService: StudentDataService, private router: Router)
  {

  }

  AddStudent()
  {
    this.student.id = this.profileForm.value.id ?? 0
    this.student.name = this.profileForm.value.name ?? '';
    this.student.age = this.profileForm.value.age  ?? 0;
    this.student.sex = this.profileForm.value.sex  ?? '';
    this.student.address = this.profileForm.value.address  ?? '';
    this.student.department = this.profileForm.value.department  ?? '';
    this.student.bloodGroup = this.profileForm.value.bloodgroup  ?? '';
    this.student.image = this.profileForm.value.image  ?? '';

    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe();
    this.router.navigate(['/students'])
  }
}
