import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.production ? 'api' : 'test';
  }

  initializeDB(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/dbinitialize`);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/listTeachers`);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/listStudents`);
  }

  getStudentById(id: string): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/getStudentInfo`, { id });
  }

  getTeacherById(id: string): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/getTeacherInfo`, { id });
  }

  createTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/addTeacher`, teacherData);
  }

  updateTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/editTeacher`, teacherData);
  }

  deleteTeacher(id: string): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/deleteTeacher`, { id });
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/addStudent`, studentData);
  }

  updateStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/editStudent`, studentData);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/deleteStudent`, { id });
  }
}