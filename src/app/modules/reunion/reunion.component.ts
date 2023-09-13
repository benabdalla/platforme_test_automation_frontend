



import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Processus } from 'src/app/domain/model/Processus';
import { Site } from 'src/app/domain/model/Site';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { Action } from 'src/app/domain/model/Action';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { ReunionGenirqueComponent } from './reunion-genirque/reunion-genirque.component';
import { ConfirmationDialogComponentComponent } from 'src/app/shared/confirmation-dialog-component/confirmation-dialog-component.component';
import { ReunionDetailsComponent } from './reunion-details/reunion-details.component';
import { ReunionServiceService } from 'src/app/services/reunion/reunion-service.service';
import { Reunion } from 'src/app/domain/model/Reunion';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent {





  @Output() playPauseClicked = new EventEmitter<boolean>();
  displayedColumns = ['id', 'Déchlencheur', 'filiale.D', 'Participant', 'filiale.R', '...'];
  dataSource!: MatTableDataSource<Reunion>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;
  role!: boolean;

  isLoading2 = false;
  currentUser: any;

  constructor(private router: Router, private toast: MessageAlertService,
    private token: TokenStorageService,
    private userService: UserService,
    public dialog: MatDialog,
    private reunionService: ReunionServiceService,
    spinnerService: SpinirLoadService) {
    console.log(this.token.getUser)
    this.currentUser = this.token.getUser();
    this.userService.getEmployee(this.currentUser.id).subscribe((res) => {
      this.currentUser = res;

    });
    this.role = this.currentUser.roles[0] == "ADMIN";
    this.loadData();
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(ReunionGenirqueComponent, {
      minWidth: '90%!important', width: '90%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.loadData();
    })
  }

  loadData() {
    let reunions: Reunion[] = [];
    let id: number = 0;
    this.reunionService.getAllReunion().subscribe(res => {
      this.isLoading = false;
      console.log(res);
      
      reunions = res;
      this.dataSource = new MatTableDataSource(reunions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error => this.isLoading = false
    );
  }



  runScenario(idScenario: number): void {
    this.isLoading2 = true;
    this.toast.messageSuccess("Scénario prêt")
    console.log(idScenario)
    this.reunionService.runSenario(idScenario).subscribe(
      (res) => {
        console.log(res);

        if (res == "ok") {


          this.isLoading2 = false
        }


      },
      (error) => this.isLoading2 = false
    );

  }
  closeScenario(idScenario: number): void {

    console.log(idScenario)
    this.reunionService.closeScenario(idScenario).subscribe(
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
    this.router.navigate(['reunionSpec']); // Navigate to the 'other' route

    /* const dialogRef = this.dialog.open(AddSecActionComponent, {
       width: '90%', height: '90%', disableClose: true
     });*/


  }



  openDialogDetails(idScenario: number): void {
    const dialogRef = this.dialog.open(ReunionDetailsComponent, {
      width: '95%',
      data: { idScenario: idScenario } // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res)
        this.loadData();
    })
  }



  openConfirmationDialog(idScenario: number): void {
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

        this.reunionService.deleteReunion(idScenario).subscribe(
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

}
