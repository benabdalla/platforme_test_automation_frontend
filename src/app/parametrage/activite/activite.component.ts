import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Activite } from 'src/app/domain/model/Activite';
import { Site } from 'src/app/domain/model/Site';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { AddParametrageComponent } from '../add-parametrage/add-parametrage.component';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent {
  @Output() playPauseClicked = new EventEmitter<boolean>();



  displayedColumns = ['idSite', 'site','....'];


  dataSource!: MatTableDataSource<Activite>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  constructor(private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    // Create 100 users
    this.loadData()
  }
  

  // Assign the data to the data source for the table to render

  loadData() {
    let act: Activite[] = [];
    let id: number = 0;
    this.serviceParamter.activites().subscribe(res => {
      this.isLoading = false;
      act = res;
      this.dataSource = new MatTableDataSource(act);
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
    this.serviceParamter.deleteActivite(id).subscribe(res => {
      this.loadData();
    });

  }



  openDialogadd(): void {
   const dialogRef = this.dialog.open(AddParametrageComponent, {
      width: '50%',height:'40%',
      data: { name:"Activite"} // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }

}
