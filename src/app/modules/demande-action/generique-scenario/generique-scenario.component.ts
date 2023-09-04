import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DemandeAction } from 'src/app/domain/model/DemandeAction';
import { Processus } from 'src/app/domain/model/Processus';
import { Site } from 'src/app/domain/model/Site';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { DemandeActionServiceService } from 'src/app/services/demandeAction/demande-action-service.service';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';

@Component({
  selector: 'app-generique-scenario',
  templateUrl: './generique-scenario.component.html',
  styleUrls: ['./generique-scenario.component.css']
})
export class GeneriqueScenarioComponent {
  breakpoint!: number; // Breakpoint observer code
  fromScGenrique!: FormGroup;
  employees!: Utilisateur[];
  site!: Site[];
  processus!: Processus[];

  wasFormChanged = false;
  message: string = "Scénario ajouté avec succès";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<GeneriqueScenarioComponent>,
    private snackbarService: MessageAlertService,
    private employer: EmployerServiceService,
    private serviceAction: DemandeActionServiceService,
    private paramertageService: ParametrageServicesService
  ) { }

  fgControl = new FormControl<any | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  fg: any[] = [
    { name: 'Mono' },
    { name: 'Group' },
    { name: 'Filiale 1' },
    { name: 'Filiale 2' },
  ];


  ngOnInit(): void {
    this.getAllEmployer();
    this.sites();
    this.processusAll()

    this.fromScGenrique = this.fb.group({
      declencheur: ["", [Validators.required]],
      respoSuiv: ["", [Validators.required]],
      respcloture: ["", [Validators.required]],
      respoReal: ["", [Validators.required]],
      fgDeclencheur: ["", [Validators.required]]
      , siteList: ["", [Validators.required]]
      , processusList: ["", [Validators.required]]

    });
    this.breakpoint = window.innerWidth <= 9000 ? 1 : 2; // Breakpoint observer code
  }

  getAllEmployer(): void {
    this.employer.getAllEmployer().subscribe((response: Utilisateur[]) => {
      this.employees = response;
      console.log(this.employees);
    }
    );
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


  public onAddScenario(): void {
    console.log(this.fromScGenrique.valid)
    const action = new DemandeAction();
    const fromValue = this.fromScGenrique.value;
    console.log(fromValue);
    action.respSuivi = fromValue.respoSuiv;
    action.respTraitement =fromValue.respoReal
    action.dechlencheur = fromValue.declencheur;
    action.filialeDeclencheur = fromValue.fgDeclencheur.name;
    action.respReal=  fromValue.respcloture;
        action.site = fromValue.siteList
    action.processus = fromValue.processusList;
    action.etat = 0;
    console.log(action);

    this.serviceAction.addAction(action).subscribe(res => {
      console.log(res);
      this.snackbarService.messageSuccess(this.message);
      this.dialogRef.close(res);
    },
      () => {
        this.snackbarService.messageErro("error lors d'ajout");


      });
    this.router.navigate(['demande/action']); // Navigate to the 'other' route


  }


  fermerPopup(){
    this.dialogRef.close();
  }


  get f() {
    return this.fromScGenrique.controls;
  }
  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.fromScGenrique.dirty) {

    } else {
      this.dialogRef.close();
    }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }


  formChanged() {
    this.wasFormChanged = true;
    //   this.fromScGenrique.controls
  }

  keyword = 'name';
  siteName = 'site';
  processusName = 'processus'

}

