import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReportModel } from 'src/app/domain/ReportModel';
import { Documentation } from 'src/app/domain/model/Documentation';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class DocumentationServiceService {

  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenario(id: number): Observable<string> {
    return this.http.get<string>(this.url + "api/v6/documentation/" + id);
  }

  public closeScenario(id: number): Observable<Documentation> {
    return this.http.get<Documentation>(this.url + "api/v6/documentation/close/" + id);
  }

  public getAllDocumentation(): Observable<Documentation[]> {
    const apiUrl = `${this.url}api/v6/documentation/all/`;
    return this.http.get<Documentation[]>(apiUrl);
  }

  public addDocumentation(Documentation:Documentation): Observable<Documentation> {
    return this.http.post<Documentation>(this.url + "api/v6/documentation", Documentation);
  } 

  public deleteDocumentation(id:Number){
    return this.http.delete<Documentation>(this.url + "api/v6/documentation/delete/"+id);
  }
  public getDocumentation(id: number): Observable<Documentation> {
    return this.http.get<Documentation>(this.url + "api/v6/documentation/get/documentation/" + id);
  }

  public reportDocumentation(): Observable<ReportModel> {
    return this.http.get<ReportModel>(this.url + "api/v6/documentation/report");
  }

}