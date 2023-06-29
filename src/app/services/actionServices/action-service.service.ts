import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from 'src/app/domain/model/Action';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class ActionServiceService {
  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenario(id: number): Observable<Action> {
    return this.http.get<Action>(this.url + "/api/v2/actions/" + id);
  }

  public getActionAllAction(): Observable<Action[]> {
    return this.http.get<Action[]>(this.url + "/api/v2/actions");
  }


  public addAction(action:Action): Observable<Action> {
    return this.http.post<Action>(this.url + "/api/v2/actions", action);
  }



}
