import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Parametrage } from 'src/app/domain/model/Parametrage';
import { Action } from '../domain/model/Action';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActionServiceService } from '../services/actionServices/action-service.service';
import { SpinirLoadService } from '../shared/spinir-load.service';
import { ParametrageServicesService } from '../services/parametrage/parametrage-services.service';
import { EditPrametrageComponent } from './edit-prametrage/edit-prametrage.component';


@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})
export class ParametrageComponent {
  @Output() playPauseClicked = new EventEmitter<boolean>();



  displayedColumns = ['id', 'url', 'verssion', 'navigateur','....'];


  dataSource!: MatTableDataSource<Parametrage>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  constructor(private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    // Create 100 users
    this.loadData()
  }

  // Assign the data to the data source for the table to render

  loadData() {
    let parametrage: Parametrage[] = [];
    let id: number = 0;
    this.serviceParamter.parametrage().subscribe(res => {
      this.isLoading = false;
      console.log("parmaetrage")
      console.log(parametrage);
      parametrage = res;
      this.dataSource = new MatTableDataSource(parametrage);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error => this.isLoading = false
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }



  openDialogEdit(idScenario: number): void {
    const dialogRef = this.dialog.open(EditPrametrageComponent, {
      width: '50%',height:'70%',
      data: { idParam: idScenario} // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }
  copyLastToFirst(inputString: string): string {
    console.log("lien:"+inputString);
    const lastString = inputString.substr(inputString.lastIndexOf('/') + 1);
   console.log("version web :"+lastString);
    return lastString
  }
}


