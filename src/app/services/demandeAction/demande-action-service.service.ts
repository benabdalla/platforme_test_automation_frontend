import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportModel } from 'src/app/domain/ReportModel';
import { DemandeAction } from 'src/app/domain/model/DemandeAction';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class DemandeActionServiceService {

  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public runSenario(id: number): Observable<string> {
    return this.http.get<string>(this.url + "api/v4/demande/" + id);
  }

  public closeScenario(id: number): Observable<DemandeAction> {
    return this.http.get<DemandeAction>(this.url + "api/v4/demande/close/" + id);
  }

  public getActionAllAction(): Observable<DemandeAction[]> {
    const apiUrl = `${this.url}api/v4/demande/all/`;
    return this.http.get<DemandeAction[]>(apiUrl);
  }

  public addAction(action:DemandeAction): Observable<DemandeAction> {
    return this.http.post<DemandeAction>(this.url + "api/v4/demande", action);
  } 
  public updateAction(action:DemandeAction){
    return this.http.put<DemandeAction>(this.url + "api/v4/actions/update", action);
  }
  public deleteAction(id:Number){
    return this.http.delete<DemandeAction>(this.url + "api/v4/demande/delete/"+id);
  }
  public getAction(id: number): Observable<DemandeAction> {
    return this.http.get<DemandeAction>(this.url + "api/v4/demande/get/action/" + id);
  }

  public reportAction(): Observable<ReportModel> {
    return this.http.get<ReportModel>(this.url + "api/v4/demande/report");
  }

}
