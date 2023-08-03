import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';




@Injectable({
  providedIn: 'root'
})
export class UserService {
private API_URL2 = 'http://localhost:8000/api/test';
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL2}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>(`${this.API_URL2}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL2}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL2}/employee/delete/${employeeId}`);
  }



}
