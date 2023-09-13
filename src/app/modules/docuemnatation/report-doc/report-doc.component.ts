import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DocumentationServiceService } from 'src/app/services/documenatation/documentation-service.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-report-doc',
  templateUrl: './report-doc.component.html',
  styleUrls: ['./report-doc.component.css']
})
export class ReportDocComponent {

  private url = Url.URL;
  urlFrame?: string;
  safeReportUrl?: SafeResourceUrl;
  errorShow:boolean=false;

  constructor(private documentationService:DocumentationServiceService,private sanitizer: DomSanitizer ) {
console.log(this.url);
this.report();
   }
  

   report():void {
      this.documentationService.reportDocumentation().subscribe(res=>{
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
