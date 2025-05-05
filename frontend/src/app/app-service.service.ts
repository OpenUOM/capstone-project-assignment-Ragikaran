import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // Adjust if needed

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.production ? 'api' : 'test';
  }

  initializeDB() {
    return this.http.get(`/${this.ROOT_URL}/dbinitialize`);
  }

  getTeacherData() {
    return this.http.get(`/${this.ROOT_URL}/listTeachers`);
  }

  getStudentData() {
    return this.http.get(`/${this.ROOT_URL}/listStudents`);
  }

  getOneStudentData(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload);
  }

  getOneTeacherData(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload);
  }

  addTeacher(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload);
  }

  deleteTeacher(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload);
  }

  editTeacher(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload);
  }

  editStudent(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/editStudent`, payload);
  }

  addStudent(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/addStudent`, payload);
  }

  deleteStudent(payload: object) {
    return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload);
  }
}
