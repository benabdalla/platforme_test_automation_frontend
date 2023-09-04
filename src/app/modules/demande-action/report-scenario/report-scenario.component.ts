import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DemandeActionServiceService } from 'src/app/services/demandeAction/demande-action-service.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-report-scenario',
  templateUrl: './report-scenario.component.html',
  styleUrls: ['./report-scenario.component.css']
})
export class ReportScenarioComponent {
  
  private url = Url.URL;
  urlFrame?: string;
  safeReportUrl?: SafeResourceUrl;
  errorShow:boolean=false;

  constructor(private actionservice:DemandeActionServiceService,private sanitizer: DomSanitizer ) {
console.log(this.url);
this.report();
   }
   report():void {
      this.actionservice.reportAction().subscribe(res=>{
        if(res.srcFrame=="404"||res==undefined || res==null){
          this.errorShow=true
        }
        
        this.safeReportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url.concat(res.srcFrame));

      }, error => {
        // Handle error
        this.errorShow=true
      });


console.log(this.urlFrame);


    }

}
