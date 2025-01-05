import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable({
    providedIn: 'root'
  })

export class StudentDataService{
    private apiUrl = "http://localhost:3000/studentData";

    constructor(private httpClient: HttpClient)
    {

    }

    getStudentDetails(): Observable<Student[]>
    {
        return this.httpClient.get<Student[]>(this.apiUrl);
    }

    getStudentById(id: Number): Observable<Student>
    {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.get<Student>(url);
    }

    addStudent(studentData: Student) : Observable<Student>
    {
        return this.httpClient.post<Student>(this.apiUrl, studentData);
    }

    updateStudent(studentData: Student) : Observable<Student>
    {
        const url = `${this.apiUrl}/${studentData.id}`;
        return this.httpClient.put<Student>(url, studentData);
    }

    deleteStudent(id: Number): Observable<void>
    {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.delete<void>(url);
    }

}