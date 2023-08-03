import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Activite } from 'src/app/domain/model/Activite';
import { Direction } from 'src/app/domain/model/Direction';
import { Parametrage } from 'src/app/domain/model/Parametrage';
import { Processus } from 'src/app/domain/model/Processus';
import { ScenarioActiviteDto } from 'src/app/domain/model/ScenarioActiviteDto';
import { ScenarioDirectionDto } from 'src/app/domain/model/ScenarioDirectionDto';
import { ScenarioPrcocessDto } from 'src/app/domain/model/ScenarioProcessus';
import { ScenarioServiceDto } from 'src/app/domain/model/ScenarioService';
import { ScenarioSiteDto } from 'src/app/domain/model/ScenarioSiteDto';
import { Site } from 'src/app/domain/model/Site';
import { TabService } from 'src/app/domain/model/TabService';
import { Url } from 'src/app/shared/ConfigUrl';

@Injectable({
  providedIn: 'root'
})
export class ParametrageServicesService {
  private url = Url.URL;
  constructor(private http: HttpClient) { }

  public sites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.url + "/api/v3/paremetrage/site");
  }
  public processus(): Observable<Processus[]> {
    return this.http.get<Processus[]>(this.url + "/api/v3/paremetrage/processus");
  }

 // /{id}
 public getParametre(id:number): Observable<Parametrage> {
  const apiUrl = `${this.url}api/v3/paremetrage/findpram/${id}`;

  return this.http.get<Parametrage>(apiUrl);
}

public getScenarioSite(): Observable<ScenarioSiteDto[]> {
  const apiUrl = `${this.url}api/v3/paremetrage/get/scenariosite`;

  return this.http.get<ScenarioSiteDto[]>(apiUrl);
}

     getScenrioActivite():Observable<ScenarioActiviteDto[]>{
      const apiUrl = `${this.url}api/v3/paremetrage/get/scenarioactivite`;

      return this.http.get<ScenarioActiviteDto[]>(apiUrl);
    }
   getScenrioProcessus():Observable<ScenarioPrcocessDto[]>{
      const apiUrl = `${this.url}api/v3/paremetrage/get/scenarioprocessus`;

      return this.http.get<ScenarioPrcocessDto[]>(apiUrl);
    }
     getScenrioScervice():Observable<ScenarioServiceDto[]>{
      const apiUrl = `${this.url}api/v3/paremetrage/get/scenarioservice`;

  return this.http.get<ScenarioServiceDto[]>(apiUrl);
    }
  getScenrioDirectionDtos():Observable<ScenarioDirectionDto[]> {
      const apiUrl = `${this.url}api/v3/paremetrage/get/scenariodirection`;

      return this.http.get<ScenarioDirectionDto[]>(apiUrl);
    }



public modifParametre(prametraes:Parametrage): Observable<any> {
  const apiUrl =this.url+"api/v3/paremetrage/modif/";

  return this.http.put(apiUrl,prametraes);
}



  public parametrage(): Observable<Parametrage[]> {
    return this.http.get<Parametrage[]>(this.url + "api/v3/paremetrage/parametre");
  }

  public directions(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.url + "/api/v3/paremetrage/direction");
  }
  public serviceApi(): Observable<TabService[]> {
    return this.http.get<TabService[]>(this.url + "/api/v3/paremetrage/serviceApi");
  }
  public activites(): Observable<Activite[]> {
    return this.http.get<Activite[]>(this.url + "/api/v3/paremetrage/activite");
  }


  public deleteSite(id:Number){
    return this.http.delete<ScenarioSiteDto>(this.url + "/api/v3/paremetrage/delete/site/"+id);
  }


  
  public deleteProcessus(id:Number){
    return this.http.delete<ScenarioPrcocessDto>(this.url + "/api/v3/paremetrage/delete/processus/"+id);
  }


  
  public deleteActivite(id:Number){
    return this.http.delete<ScenarioActiviteDto>(this.url + "/api/v3/paremetrage/delete/activite/"+id);
  }


  public deleteService(id:Number){
    return this.http.delete<ScenarioServiceDto>(this.url + "/api/v3/paremetrage/delete/service/"+id);
  }




  public deleteDireection(id:Number){
    return this.http.delete<ScenarioDirectionDto>(this.url + "/api/v3/paremetrage/delete/direction/"+id);
  }



  public addSite(site:ScenarioSiteDto): Observable<ScenarioSiteDto> {
    return this.http.post<ScenarioSiteDto>(this.url + "/api/v3/paremetrage/add/site", site);
  } 

  public addProcess(processusDto:ScenarioPrcocessDto): Observable<ScenarioPrcocessDto> {
    return this.http.post<ScenarioPrcocessDto>(this.url + "/api/v3/paremetrage/add/processus", processusDto);
  } 
  public addActivite(activite:ScenarioActiviteDto): Observable<ScenarioActiviteDto> {
    return this.http.post<ScenarioActiviteDto>(this.url + "/api/v3/paremetrage/add/activite", activite);
  } 
  public addService(serviceTab:ScenarioServiceDto): Observable<ScenarioServiceDto> {
    return this.http.post<ScenarioServiceDto>(this.url + "/api/v3/paremetrage/add/service", serviceTab);
  } 
  public addDirection(direction:ScenarioDirectionDto): Observable<ScenarioDirectionDto> {
    return this.http.post<ScenarioDirectionDto>(this.url + "/api/v3/paremetrage/add/direction", direction);
  } 
 
  
  



}
