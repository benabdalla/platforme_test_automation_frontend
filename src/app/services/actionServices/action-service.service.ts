import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReportModel } from 'src/app/domain/ReportModel';
import { Action } from 'src/app/domain/model/Action';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class ActionServiceService {
  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenario(id: number): Observable<string> {
    return this.http.get<string>(this.url + "api/v2/actions/" + id);
  }

  public runSenarioSimplifier(id: number): Observable<string> {
    return this.http.get<string>(this.url + "api/v2/actions/run/simplifier/" + id);
  }
  public closeScenario(id: number): Observable<Action> {
    return this.http.get<Action>(this.url + "api/v2/actions/close/" + id);
  }


  public getActionAllAction(id:number): Observable<Action[]> {
    const apiUrl = `${this.url}api/v2/actions/all/${id}`;
    return this.http.get<Action[]>(apiUrl);
  }


  public addAction(action:Action): Observable<Action> {
    return this.http.post<Action>(this.url + "api/v2/actions", action);
  } 

  public updateAction(action:Action){
    return this.http.put<Action>(this.url + "api/v2/actions/update", action);
  }
  public deleteAction(id:Number){
    return this.http.delete<Action>(this.url + "api/v2/actions/delete/"+id);
  }
  public getAction(id: number): Observable<Action> {
    return this.http.get<Action>(this.url + "api/v2/actions/get/action/" + id);
  }

  public reportAction(): Observable<ReportModel> {
    return this.http.get<ReportModel>(this.url + "api/v2/actions/report");
  }
  public reportActionSimplifier(): Observable<ReportModel> {
    return this.http.get<ReportModel>(this.url + "api/v2/actions/report/simplifier");
  }


  
}
