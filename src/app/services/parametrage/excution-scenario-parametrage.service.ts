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
  
}
