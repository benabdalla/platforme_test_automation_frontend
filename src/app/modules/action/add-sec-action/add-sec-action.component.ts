import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { Processus } from 'src/app/domain/model/Processus';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { Site } from 'src/app/domain/model/Site';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from 'src/app/domain/model/Action';
import { Router } from '@angular/router';
import { Activite } from 'src/app/domain/model/Activite';
import { TabService } from 'src/app/domain/model/TabService';
import { Direction } from 'src/app/domain/model/Direction';

@Component({
  selector: 'app-add-sec-action',
  templateUrl: './add-sec-action.component.html',
  styleUrls: ['./add-sec-action.component.css']
})
export class AddSecActionComponent implements OnInit {
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

    public dialog: MatDialog, private snackbarService: MessageAlertService, private router: Router,
    private employer: EmployerServiceService, private snackbar: MatSnackBar, private serviceAction: ActionServiceService,
    private paramertageService: ParametrageServicesService, private fromBuilder: FormBuilder
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
      respoSuiv: ["", [Validators.required]],
      respcloture: ["", [Validators.required]],
      respoReal: ["", [Validators.required]],
      fgDeclencheur: ["", [Validators.required]]
      , fgRespReal: ["", [Validators.required]]
      , fgRespSuivi: ["", [Validators.required]]
      , fgRespClot: ["", [Validators.required]]
      , siteList: ["", [Validators.required]]
      , processusList: ["", [Validators.required]],
      source: new FormControl('', Validators.required),
      typeAction: ["", [Validators.required]],
      priorite: ["", [Validators.required]],
      gravite: ["", [Validators.required]],
      type_cause: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      description: ["", [Validators.required]],
      activite: ["", [Validators.required]],
      direction: ["", [Validators.required]],
      service: ["", [Validators.required]],
      Desi_SA: ["", [Validators.required]],
      date_realisation: ["", [Validators.required]],
      taux_realisation: ["", [Validators.required]],
      date_suivi: ["", [Validators.required]],
      taux_suivi: ["", [Validators.required]],
      date_création: ["", [Validators.required]],
      produit: ["", [Validators.required]]

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
    const action = new Action();
    const fromValue = this.addCusForm.value;
    console.log(fromValue);
    action.respSuivi = fromValue.respoSuiv;
    action.respCloture = fromValue.respcloture;
    action.respTraitement = fromValue.respoReal;
    action.dechlencheur = fromValue.declencheur;
    action.filialeDeclencheur = fromValue.fgDeclencheur.name;
    action.filialeRealisation = fromValue.fgRespReal.name;
    action.filialeSuivi = fromValue.fgRespSuivi.name;
    action.filialeCloture = fromValue.fgRespClot.name;
    action.designation = fromValue.designation
    action.description = fromValue.description
    action.DesiSA = fromValue.Desi_SA
    action.dateSuivi = fromValue.date_suivi
    action.source = fromValue.source
    action.activite = fromValue.activite;
    action.direction = fromValue.direction;
    action.service = fromValue.service;
    action.site=fromValue.siteList
    action.processus=fromValue.processusList;
    action.gravite = fromValue.gravite
    action.priorite = fromValue.priorite
    action.typeAction = fromValue.typeAction
    action.typeCause = fromValue.type_cause
    action.dateRealisation = fromValue.date_realisation
    action.tauxSuivi = fromValue.taux_suivi
    action.dateCreation = fromValue.date_création
    action.produit = fromValue.produit
    action.etat=1;
    action.actSimplifier=0;
    // action.run: boolean=false    
    console.log(action);

    this.serviceAction.addAction(action).subscribe(res => {
      console.log(res);
      this.snackbarService.messageSuccess(this.message);
      this.dialog.closeAll();
    },
      (error) => {
        this.snackbarService.messageErro("error lors d'ajout");


      });
    this.router.navigate(['action']); // Navigate to the 'other' route


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
    this.router.navigate(['action']); // Navigate to the 'other' route



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




