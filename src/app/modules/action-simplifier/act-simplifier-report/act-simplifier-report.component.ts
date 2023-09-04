import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-act-simplifier-report',
  templateUrl: './act-simplifier-report.component.html',
  styleUrls: ['./act-simplifier-report.component.css']
})
export class ActSimplifierReportComponent {

                          
 
  private url = Url.URL;
  urlFrame?: string;
  safeReportUrl?: SafeResourceUrl;
  errorShow:boolean=false;
  constructor(private actionservice:ActionServiceService,private sanitizer: DomSanitizer ) {
console.log(this.url);
this.report();
   }
  

   report():void {
      this.actionservice.reportActionSimplifier().subscribe(res=>{
        console.log(res)
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
 
 
 
