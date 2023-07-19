import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { Action } from 'src/app/domain/model/Action';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewOptions } from 'src/app/shared/view-options';
import { MatTableDataSource } from '@angular/material/table';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { Router } from '@angular/router';
import { ActSimplifierDetailsComponent } from './act-simplifier-details/act-simplifier-details.component';
import { ActSimplifierGeniriqueComponent } from './act-simplifier-genirique/act-simplifier-genirique.component';

@Component({
  selector: 'app-actionaction-simplifier',
  templateUrl: './actionaction-simplifier.component.html',
  styleUrls: ['./actionaction-simplifier.component.css']
})
export class ActionactionSimplifierComponent {

  @Output() playPauseClicked = new EventEmitter<boolean>();


 
  displayedColumns = ['id', 'Déchlencheur','filiale.D', 'Responsable traitement', 'filiale.R','Responsable Côlture','filiale.C','Responsable suivi','filiale.S','...','....'];
  dataSource!: MatTableDataSource<Action>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  isLoading = true;

  constructor(private router :Router ,public dialog: MatDialog,private serviceAction: ActionServiceService,spinnerService :SpinirLoadService) {
    // Create 100 users
    this.loadData()
}

    // Assign the data to the data source for the table to render

loadData(){
  let actions: Action[] = [];
let  id:number=1;
  this.serviceAction.getActionAllAction(id).subscribe(res=>{
    this.isLoading=false;
   actions=res;
   this.dataSource = new MatTableDataSource(actions);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }, 
  error => this.isLoading = false
);
}

runSenarioSimplifier(idScenario:number):void{
  console.log(idScenario)
  this.serviceAction.runSenarioSimplifier(idScenario).subscribe(
    res=>{
      console.log(res)
    }
  );

}
closeScenario(idScenario:number):void{
 


}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  openDialog(): void {
    this.router.navigate(['scsepcifique']); // Navigate to the 'other' route

   /* const dialogRef = this.dialog.open(AddSecActionComponent, {
      width: '90%', height: '90%', disableClose: true
    });*/
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ActSimplifierGeniriqueComponent, {
      width: '60%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }
deleteSecenario(idScenario:number){
  this.serviceAction.deleteAction(idScenario).subscribe(
    res=>{console.log(res)
    this.loadData();
    },error=>{
      console.log(error)
    }
  )
}
openDialogDetails(idScenario:number):void{
  const dialogRef = this.dialog.open(ActSimplifierDetailsComponent, {
    width: '80%',
    data: { idScenario: idScenario} // Pass the parameters as an object
  });

  dialogRef.afterClosed().subscribe((res)=>{
    if(res)
      this.loadData();
  })
}

}


