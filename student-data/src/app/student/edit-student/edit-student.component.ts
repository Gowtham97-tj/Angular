import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentDataService } from 'src/app/services/studentdata.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

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
  name: new FormControl(this.student.name || ""),
  age: new FormControl(this.student.age || 0),
  sex: new FormControl(this.student.sex || ""),
  department: new FormControl(this.student.department || ""),
  address: new FormControl(this.student.address || ""),
  bloodgroup: new FormControl(this.student.bloodGroup || ""),
  image: new FormControl(this.student.image || "")
  });
  
  ngOnInit()
  {
    this.studentService.getStudentById(parseInt(this.actRouter.snapshot.paramMap.get("id") || "")).subscribe((data) => {
      console.log(data);
      this.student = data;
      this.profileForm.patchValue({
        id: this.student.id,
        name: this.student.name,
        age: this.student.age,
        sex: this.student.sex,
        department: this.student.department,
        address: this.student.address,
        bloodgroup: this.student.bloodGroup,
        image: this.student.image
      });
    });
  }



   
  constructor(private studentService: StudentDataService, private router: Router, private actRouter: ActivatedRoute)
  {
  }

  submit()
  {
    this.student.name = this.profileForm.value.name ?? '';
    this.student.age = this.profileForm.value.age  ?? 0;
    this.student.address = this.profileForm.value.address  ?? '';
    this.student.department = this.profileForm.value.department  ?? '';
    this.student.bloodGroup = this.profileForm.value.bloodgroup  ?? '';
    this.student.image = this.profileForm.value.image  ?? '';

    this.studentService.updateStudent(this.student).subscribe();
    //console.log(this.profileForm.value);
    console.log(this.student);
    this.router.navigate(['/students'])
  }
}
