import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Processus } from 'src/app/domain/model/Processus';
import { Site } from 'src/app/domain/model/Site';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { AddParametrageComponent } from '../add-parametrage/add-parametrage.component';

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent {
  @Output() playPauseClicked = new EventEmitter<boolean>();



  displayedColumns = ['idSite', 'site','....'];


  dataSource!: MatTableDataSource<Processus>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  constructor(private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    // Create 100 users
    this.loadData()
  }
  

  // Assign the data to the data source for the table to render

  loadData() {
    let processus: Processus[] = [];
    let id: number = 0;
    this.serviceParamter.processus().subscribe(res => {
      this.isLoading = false;
      processus = res;
      this.dataSource = new MatTableDataSource(processus);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error => this.isLoading = false
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }



  deleteScenario(id:Number):void{
    this.serviceParamter.deleteProcessus(id).subscribe(res => {
      this.loadData();
    });

  }



  openDialogadd(): void {
   const dialogRef = this.dialog.open(AddParametrageComponent, {
      width: '50%',height:'40%',
      data: { name:"Processus"} // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }



}
