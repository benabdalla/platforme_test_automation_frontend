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

  public getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL2}/employee/all`);
  }

  public addEmployee(employee: any): Observable<any> {
    console.log(employee);
    return this.http.post<any>(`${this.API_URL2}/employee/add`, employee);
  }

  public updateEmployee(employee: any): Observable<Employee> {
    return this.http.put<any>(`${this.API_URL2}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL2}/employee/delete/${employeeId}`);
  }
  public getEmployee(employeeId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL2}/employee/find/${employeeId}`);
  }

 

}
