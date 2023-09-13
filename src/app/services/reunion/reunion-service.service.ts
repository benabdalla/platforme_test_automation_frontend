
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportModel } from 'src/app/domain/ReportModel';
import { Reunion } from 'src/app/domain/model/Reunion';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class ReunionServiceService {
  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenario(id: number): Observable<string> {
    return this.http.get<string>(this.url + "api/v5/reunion/" + id);
  }

  public closeScenario(id: number): Observable<Reunion> {
    return this.http.get<Reunion>(this.url + "api/v5/reunion/close/" + id);
  }

  public getAllReunion(): Observable<Reunion[]> {
    const apiUrl = `${this.url}api/v5/reunion/all/`;
    return this.http.get<Reunion[]>(apiUrl);
  }

  public addReunion(reunion:Reunion): Observable<Reunion> {
    return this.http.post<Reunion>(this.url + "api/v5/reunion", reunion);
  } 

  public deleteReunion(id:Number){
    return this.http.delete<Reunion>(this.url + "api/v5/reunion/delete/"+id);
  }
  public getReunion(id: number): Observable<Reunion> {
    return this.http.get<Reunion>(this.url + "api/v5/reunion/get/reunion/" + id);
  }

  public reportReunion(): Observable<ReportModel> {
    return this.http.get<ReportModel>(this.url + "api/v5/reunion/report");
  }
}
