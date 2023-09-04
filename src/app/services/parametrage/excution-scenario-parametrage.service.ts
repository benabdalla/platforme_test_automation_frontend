import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Parametrage } from 'src/app/domain/model/Parametrage';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class ExcutionScenarioParametrageService {
  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenarioSite(id: number): Observable<string> {
    const apiUrl = `${this.url}api/v3/paremetrage/find/scenariosite/${id}`;
    return this.http.get<string>(apiUrl);
  }

  public runSenarioProcessus(id: number): Observable<string> {
    const apiUrl = `${this.url}api/v3/paremetrage/find/scenarioprocessus/${id}`;
    return this.http.get<string>(apiUrl);
  }
  public runSenarioDirection(id: number): Observable<string> {
    const apiUrl = `${this.url}api/v3/paremetrage/find/scenariodirection/${id}`;
    return this.http.get<string>(apiUrl);
  }
  public runSenarioActivite(id: number): Observable<string> {
    const apiUrl = `${this.url}api/v3/paremetrage/find/scenarioActivite/${id}`;
    return this.http.get<string>(apiUrl);
  }
  public runSenarioService(id: number): Observable<string> {
    const apiUrl = `${this.url}api/v3/paremetrage/find/scenarioservice/${id}`;
    return this.http.get<string>(apiUrl);
  }
  
}
