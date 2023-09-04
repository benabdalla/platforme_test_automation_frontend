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
import { ReunionGenirqueComponent } from '../reunion-genirque/reunion-genirque.component';
import { Action } from 'src/app/domain/model/Action';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';

@Component({
  selector: 'app-reunion-spec',
  templateUrl: './reunion-spec.component.html',
  styleUrls: ['./reunion-spec.component.css']
})
export class ReunionSpecComponent {



    @Output() playPauseClicked = new EventEmitter<boolean>();
  displayedColumns = ['id', 'Déchlencheur', 'filiale.D', 'Responsable traitement', 'filiale.R', 'Responsable Côlture', 'filiale.C', '...']; //'Responsable suivi', 'filiale.S'
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
}
  openDialog2(): void {
    const dialogRef = this.dialog.open(ReunionGenirqueComponent, {
      minWidth: '100%!important',maxWidth:'100%',width:'100%', height: '100%', disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
     // this.loadData();
    })
  }

}
