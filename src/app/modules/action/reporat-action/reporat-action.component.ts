import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-reporat-action',
  templateUrl: './reporat-action.component.html',
  styleUrls: ['./reporat-action.component.css']
})
export class ReporatActionComponent {
                             
 
  private url = Url.URL;
  urlFrame?: string;
  safeReportUrl?: SafeResourceUrl;
  errorShow:boolean=false;

  constructor(private actionservice:ActionServiceService,private sanitizer: DomSanitizer ) {
console.log(this.url);
this.report();
   }
  

   report():void {
      this.actionservice.reportAction().subscribe(res=>{
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
 
 
 
 
 


