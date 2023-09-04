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
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';
import { ConfirmationDialogComponentComponent } from 'src/app/shared/confirmation-dialog-component/confirmation-dialog-component.component';

@Component({
  selector: 'app-actionaction-simplifier',
  templateUrl: './actionaction-simplifier.component.html',
  styleUrls: ['./actionaction-simplifier.component.css']
})
export class ActionactionSimplifierComponent {

  @Output() playPauseClicked = new EventEmitter<boolean>();


 
  displayedColumns = ['id', 'Déchlencheur','filiale.D', 'Responsable traitement', 'filiale.R','Responsable Côlture','filiale.C','...'];
  dataSource!: MatTableDataSource<Action>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  isLoading = true;
  role!:boolean;

  isLoading2=false;
  currentUser: any;

  constructor(private router: Router, private toast :MessageAlertService,
    private token: TokenStorageService,
    private userService:UserService,
    public dialog: MatDialog,
    private serviceAction: ActionServiceService,
    spinnerService: SpinirLoadService) {
      console.log(this.token.getUser)
      this.currentUser = this.token.getUser();
  this.userService.getEmployee(this.currentUser.id).subscribe((res)=>{
    this.currentUser=res;
  
  });
  console.log(this.currentUser);
  this.role=this.currentUser.roles[0]=="ADMIN";
    this.loadData()
  }

  // Assign the data to the data source for the table to render

  loadData() {
    let actions: Action[] = [];
    let id: number = 1;
    this.serviceAction.getActionAllAction(id).subscribe(res => {
      this.isLoading = false;
      actions = res;
      this.dataSource = new MatTableDataSource(actions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error => this.isLoading = false
    );
  }

runSenarioSimplifier(idScenario:number):void{
  this.isLoading2 = true;
  console.log(idScenario)
  this.toast.messageSuccess("Scénario prêt")
  this.serviceAction.runSenarioSimplifier(idScenario).subscribe(
    (res) => {
      console.log(res);
     
    if(res=="ok"){
      
      
      this.isLoading2 = false
    }
  
      
    },
      (error) => this.isLoading2 = false
    );
}
closeScenario(idScenario:number):void{
 

  console.log(idScenario)
  this.serviceAction.closeScenario(idScenario).subscribe(
    res => {
      console.log(res)
      this.toast.messageErro("Scénario arrét")
    }
  );

}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  openDialog(): void {
    this.router.navigate(['scsepcifiqueActSimplifer']); // Navigate to the 'other' route

   /* const dialogRef = this.dialog.open(AddSecActionComponent, {
      width: '90%', height: '90%', disableClose: true
    });*/
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ActSimplifierGeniriqueComponent, {
      width: '85%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res)
        this.loadData();
    })
  }
deleteSecenario(idScenario:number){
  const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent
    , {
    width: '300px',
    data: {
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this item?'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
    
        this.serviceAction.deleteAction(idScenario).subscribe(
          res => {
            console.log(res)
            this.loadData();
          }, error => {
            console.log(error)
          }
        )
      
    }
  });
}

openDialogDetails(idScenario:number):void{
  const dialogRef = this.dialog.open(ActSimplifierDetailsComponent, {
    minWidth: '100%',maxWidth:'100%',width:'100%', height: '100%', disableClose: true,
    data: { idScenario: idScenario} // Pass the parameters as an object
  });

  dialogRef.afterClosed().subscribe((res)=>{
    if(res)
      this.loadData();
  })
}

}


