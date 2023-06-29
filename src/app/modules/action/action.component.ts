import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddSecActionComponent } from './add-sec-action/add-sec-action.component';
import { AddactiongenriqueComponent } from './addactiongenrique/addactiongenrique.component';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { Action } from 'src/app/domain/model/Action';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewOptions } from 'src/app/shared/view-options';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'], animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ActionComponent{
  @Output() playPauseClicked = new EventEmitter<boolean>();
  isLoading = false;


 
  displayedColumns = ['id', 'Responsable dechlencheur', 'Responsable traitement', 'Responsable Côlture','Responsable suivi','...'];
  dataSource!: MatTableDataSource<Action>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private serviceAction: ActionServiceService) {
    // Create 100 users
    let actions: Action[] = [];
  this.serviceAction.getActionAllAction().subscribe(res=>{
   actions=res;
   if(actions==null){
    this.simulateDataLoad()
    
 
   }
   this.dataSource = new MatTableDataSource(res);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  });

    // Assign the data to the data source for the table to render
 
  }
runScenario(idScenario:number):void{
  console.log(idScenario)
  this.serviceAction.runSenario(idScenario).subscribe(
    res=>{
      console.log(res)
    }
  );

}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddSecActionComponent, {
      width: '90%', height: '90%', disableClose: true
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AddactiongenriqueComponent, {
      width: '90%', height: '90%', disableClose: true
    });
  }

  simulateDataLoad() {
    this.isLoading = true;

    setTimeout(() => {
      // Simulating data loading completion
      this.isLoading = false;
    }, 3000); // Simulating a 3-second delay
  }

}


 






