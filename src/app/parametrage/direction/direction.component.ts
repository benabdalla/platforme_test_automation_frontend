import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Direction } from 'src/app/domain/model/Direction';
import { Site } from 'src/app/domain/model/Site';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { AddParametrageComponent } from '../add-parametrage/add-parametrage.component';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
  @Output() playPauseClicked = new EventEmitter<boolean>();



  displayedColumns = ['idSite', 'site','....'];


  dataSource!: MatTableDataSource<Direction>;
   direction!: Direction[] ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  constructor(private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    this.loadData()
  }
  

  // Assign the data to the data source for the table to render

  loadData() {
   
    let id: number = 0;
    this.serviceParamter.directions().subscribe(res => {
      this.isLoading = false;
      this.direction = res;
      console.log(res);
      console.log(this.direction)
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);

    },
      error => this.isLoading = false
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  deleteScenario(id:Number):void{
    console.log(id);
    this.serviceParamter.deleteDireection(id).subscribe(res => {
      this.loadData();
    });

  }



  openDialogadd(): void {
   const dialogRef = this.dialog.open(AddParametrageComponent, {
      width: '50%',height:'40%',
      data: { name:"Direction"} // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })

  }



}