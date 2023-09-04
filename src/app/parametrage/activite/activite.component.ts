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
import { ScenarioActiviteDto } from 'src/app/domain/model/ScenarioActiviteDto';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { ExcutionScenarioParametrageService } from 'src/app/services/parametrage/excution-scenario-parametrage.service';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent {
  @Output() playPauseClicked = new EventEmitter<boolean>();




  displayedColumns = ['idSite', 'site','dechlencheur','f','....'];


  dataSource!: MatTableDataSource<ScenarioActiviteDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  currentUser: any;
  role!:boolean;
  constructor(private token: TokenStorageService,private userService:UserService,private serviceAction :ActionServiceService ,private toast:MessageAlertService,private excuteScenrio:ExcutionScenarioParametrageService ,private router: Router, public dialog: MatDialog, private serviceParamter: ParametrageServicesService, spinnerService: SpinirLoadService) {
    // Create 100 users
    this.loadData()
    console.log(this.token.getUser)
    this.currentUser = this.token.getUser();
this.userService.getEmployee(this.currentUser.id).subscribe((res)=>{
  this.currentUser=res;

});
console.log(this.currentUser);
this.role=this.currentUser.roles[0]=="ADMIN";
  
  }


    isLoading = true;
    isLoading2=false;
  
  
    closeScenario(idScenario:number):void{
      this.toast.messageSuccess("scénario d'arrêt")
  
      console.log(idScenario)
      this.serviceAction.closeScenario(idScenario).subscribe(
        res=>{
          console.log(res)
        }
      );
    
    }
  runScenario(id:number){   
     this.isLoading2 = true;
  
     this.toast.messageSuccess("Scénario prêt")
  this.excuteScenrio.runSenarioActivite(id).subscribe(
    (res) => {
      console.log(res);
     
    if(res=="ok"){
      
      
      this.isLoading2 = false
    }
  
      
    },
      (error) => this.isLoading2 = false
    );
  
    }

  // Assign the data to the data source for the table to render

  loadData() {
    let sites: ScenarioActiviteDto[] = [];
    let id: number = 0;
    this.serviceParamter.getScenrioActivite().subscribe(
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
