import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, map, mergeMap, tap } from 'rxjs';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { Url } from 'src/app/shared/ConfigUrl';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {

  private url = Url.URL;
  safeReportUrl$: Subject<SafeResourceUrl> = new Subject();

  constructor(private parametrageService: ParametrageServicesService,
    private sanitizer: DomSanitizer, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.
      pipe(
        map(params => params['name']),
        filter(name => name !== undefined && name !== null),
        mergeMap(name => this.parametrageService.reportParametrage(name))
      )
      .subscribe(url => {
        this.safeReportUrl$.next(this.sanitizer.bypassSecurityTrustResourceUrl
          (this.url.concat(url.srcFrame)))
      });
  }

}
