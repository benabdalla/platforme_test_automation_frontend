import { Component, EventEmitter, Output, ViewChild } from '@angular/core';;
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { Router } from '@angular/router';
import { DemandeAction } from 'src/app/domain/model/DemandeAction';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DocumentationServiceService } from 'src/app/services/documenatation/documentation-service.service';
import { Documentation } from 'src/app/domain/model/Documentation';
import { AddSpecDocComponent } from './add-spec-doc/add-spec-doc.component';
import { AddGenirqueDocComponent } from './add-genirque-doc/add-genirque-doc.component';
import { DetailsDocComponent } from './details-doc/details-doc.component';

@Component({
  selector: 'app-docuemnatation',
  templateUrl: './docuemnatation.component.html',
  styleUrls: ['./docuemnatation.component.css']
})
export class DocuemnatationComponent {

  @Output() playPauseClicked = new EventEmitter<boolean>();
  displayedColumns = ['id', 'supperviseur', 'filiale.Scenario', 'Approbateur','Rédacteur','Verficateur','Accusé Rcep..','...', '....'];
  dataSource!: MatTableDataSource<Documentation>;

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
    private docuemnaationService: DocumentationServiceService,
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
    let documenatation: Documentation[] = [];

    this.docuemnaationService.getAllDocumentation().subscribe(res => {
      this.isLoading = false;
      documenatation = res;
      this.dataSource = new MatTableDataSource(documenatation);
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
    this.docuemnaationService.runSenario(idScenario).subscribe(
      (res) => {
        console.log(res);
       
      if(res=="ok"){
        
        
        this.isLoading2 = false
      }
    
        
      },
        (error) => this.isLoading2 = false
      );

  }
  closeScenario(idScenario: number): void {

    console.log(idScenario)
    this.docuemnaationService.closeScenario(idScenario).subscribe(
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
   // this.router.navigate(['scsepcifique']); // Navigate to the 'other' route

   const dialogRef = this.dialog.open(AddSpecDocComponent, {
    width: '80%', height: '95%', disableClose: true
  });
  dialogRef.afterClosed().subscribe((res) => {
    this.loadData();
  })

  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AddGenirqueDocComponent, {
      width: '80%', height: '95%', disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.loadData();
    })
  }
  deleteSecenario(idScenario: number) {
    this.docuemnaationService.deleteDocumentation(idScenario).subscribe(
      res => {
        console.log(res)
        this.loadData();
      }, error => {
        console.log(error)
      }
    )
  }
  openDialogDetails(idScenario: number): void {
    const dialogRef = this.dialog.open(DetailsDocComponent, {
      width: '80%',
      data: { idScenario: idScenario } // Pass the parameters as an object
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res)
        this.loadData();
    })
  }

}