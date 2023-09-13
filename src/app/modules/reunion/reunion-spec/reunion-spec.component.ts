import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Processus } from 'src/app/domain/model/Processus';
import { Site } from 'src/app/domain/model/Site';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { ReunionGenirqueComponent } from '../reunion-genirque/reunion-genirque.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenStorageService } from 'src/app/authentification/_services/token-storage.service';
import { UserService } from 'src/app/authentification/_services/user.service';
import { SpinirLoadService } from 'src/app/shared/spinir-load.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Activite } from 'src/app/domain/model/Activite';
import { TabService } from 'src/app/domain/model/TabService';
import { Direction } from 'src/app/domain/model/Direction';
import { ReunionServiceService } from 'src/app/services/reunion/reunion-service.service';
import { Reunion } from 'src/app/domain/model/Reunion';
import { TypeReunion } from 'src/app/domain/model/TypeReunion';

@Component({
  selector: 'app-reunion-spec',
  templateUrl: './reunion-spec.component.html',
  styleUrls: ['./reunion-spec.component.css']
})
export class ReunionSpecComponent {


  public breakpoint!: number; // Breakpoint observer code
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm!: FormGroup;
  wasFormChanged = false;
  selectedOption!: any;
  produitDisplay = true;


  employees!: Utilisateur[];
  site!: Site[];
  processus!: Processus[];
  activite!: Activite[];
  tabservice!: TabService[];
  direction!: Direction[];

  message: string = "Scénario ajouté avec succès";
  constructor(
    public dialog: MatDialog, 
    private snackbarService: MessageAlertService,
     private router: Router,
    private employer: EmployerServiceService, 
    private snackbar: MatSnackBar,
    private reunionService: ReunionServiceService,
    private paramertageService: ParametrageServicesService,
    private fromBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.getAllEmployer();
    this.sites();
    this.processusAll()
    this.activites();
    this.directions();
    this.serviceApi();
    this.addCusForm = this.fromBuilder.group({
      declencheur: ["", [Validators.required]],
      respoReal: ["", [Validators.required]],
      fgDeclencheur: ["", [Validators.required]]
      , fgRespReal: ["", [Validators.required]]
      , siteList: ["", [Validators.required]]
      , processusList: ["", [Validators.required]],
      source: new FormControl('', Validators.required),
      designation: ["", [Validators.required]],
      description: ["", [Validators.required]],
      activite: ["", [Validators.required]],
      direction: ["", [Validators.required]],
      service: ["", [Validators.required]],
      taux_suivi: ["", [Validators.required]],
      date_création: ["", [Validators.required]],
   
    });
    this.breakpoint = window.innerWidth <= 900 ? 1 : 2; // Breakpoint observer code
  }

  fg: any[] = [
    { name: 'Mono' },
    { name: 'Group' },
    { name: 'Filiale 1' },
    { name: 'Filiale 2' },
  ];




  getAllEmployer(): void {
    this.employer.getAllEmployer().subscribe((response: Utilisateur[]) => {
      this.employees = response;
      console.log(this.employees);
    });
  }

  sites(): void {
    this.paramertageService.sites().subscribe((res: Site[]) => {
      this.site = res
      console.log(this.site);

    })
  }

  processusAll(): void {
    this.paramertageService.processus().subscribe((res: Processus[]) => {
      this.processus = res
      console.log(this.processus);

    })
  }

  disaibledProd(): void {
    console.log("test  ==> " + this.selectedOption?.name)
    if (this.selectedOption?.name == "Group") {
      this.produitDisplay = false;
    } else {
      this.produitDisplay = true;
    }


  }

  public onAddScenario(): void {
    console.log(this.addCusForm.valid)
    const reunion = new Reunion();
    const typeReunion = new TypeReunion();
    const fromValue = this.addCusForm.value;
    console.log(fromValue);
    typeReunion.dechlencheur =fromValue.declencheur;
    typeReunion.pourInfo = fromValue.respoReal;
    typeReunion.filialeDeclencheur = fromValue.fgDeclencheur.name;
    typeReunion.filialeRealisation = fromValue.fgRespReal.name;
    typeReunion.periodicite= fromValue.taux_suivi
    typeReunion.typeReunion=fromValue.source
    reunion.typeReunion=typeReunion
    reunion.orderJour = fromValue.designation
    reunion.lieu = fromValue.description
    reunion.datePrevue=fromValue.date_création
    reunion.activite = fromValue.activite;
    reunion.direction = fromValue.direction;
    reunion.service = fromValue.service;
    reunion.site = fromValue.siteList
    reunion.processus = fromValue.processusList;
    reunion.etat = 1;
    // reunion.run: boolean=false    
    console.log(reunion);

    this.reunionService.addReunion(reunion).subscribe(res => {
      this.snackbarService.messageSuccess(this.message);
      this.router.navigate(['reunion']);
    },
      (error) => {
        this.snackbarService.messageErro("error lors d'ajout");
      });
   // Navigate to the 'other' route
  }


  get f() {
    return this.addCusForm.controls;
  }
  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.addCusForm.dirty) {

    } else {
      this.dialog.closeAll();
    }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      console.log(group.controls[i].value);
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
    //   this.fromScGenrique.controls
  }

  keyword = 'name';
  siteName = 'site';
  processusName = 'processus'

  viderFroms(): void {
    this.addCusForm.reset();
    this.router.navigate(['reunion']); // Navigate to the 'other' route



  }

  directions(): void {
    this.paramertageService.directions().subscribe((res: Direction[]) => {
      this.direction = res;
    });
  }


  public serviceApi(): void {
    this.paramertageService.serviceApi().subscribe((res: TabService[]) => {
      this.tabservice = res;
    });
  }
  public activites(): void {
    this.paramertageService.activites().subscribe((res: Activite[]) => {
      this.activite = res;
    });
  }
}







