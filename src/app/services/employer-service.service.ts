import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../shared/ConfigUrl';
import Utilisateur from '../domain/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {

  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public getAllEmployer(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url + "api/v1/employees");
  }
}
