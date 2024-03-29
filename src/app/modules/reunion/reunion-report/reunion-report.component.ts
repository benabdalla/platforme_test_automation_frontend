import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ReunionServiceService } from 'src/app/services/reunion/reunion-service.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-reunion-report',
  templateUrl: './reunion-report.component.html',
  styleUrls: ['./reunion-report.component.css']
})
export class ReunionReportComponent {


  private url = Url.URL;
  urlFrame?: string;
  safeReportUrl?: SafeResourceUrl;
  errorShow:boolean=false;

  constructor(private reunionService:ReunionServiceService,private sanitizer: DomSanitizer ) {
console.log(this.url);
this.report();
   }
  

   report():void {
      this.reunionService.reportReunion().subscribe(res=>{
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
 
 
