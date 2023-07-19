import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Parametrage } from 'src/app/domain/model/Parametrage';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { Site } from 'src/app/domain/model/Site';
import { AddParametrageComponent } from '../add-parametrage/add-parametrage.component';
import { ScenarioSiteDto } from 'src/app/domain/model/ScenarioSiteDto';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {

  @Output() playPauseClicked = new EventEmitter<boolean>();



  displayedColumns = ['idSite', 'site','dechlencheur','f','....'];


  dataSource!: MatTableDataSource<ScenarioSiteDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  constructor(private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    // Create 100 users
    this.loadData()
  }
  

  // Assign the data to the data source for the table to render

  loadData() {
    let sites: ScenarioSiteDto[] = [];
    let id: number = 0;
    this.serviceParamter.getScenarioSite().subscribe(
      (res) => {
      this.isLoading = false;
      sites = res;
      console.log(sites)
      this.dataSource = new MatTableDataSource(sites);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      (error) => this.isLoading = false
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  deleteScenario(id:Number):void{
    this.serviceParamter.deleteSite(id).subscribe(res => {
      this.loadData();
    });

  }



  openDialogadd(): void {
   const dialogRef = this.dialog.open(AddParametrageComponent, {
      width: '50%',height:'40%',
      data: { name:"Site"} // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }
}