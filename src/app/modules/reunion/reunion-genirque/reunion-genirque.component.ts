import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Action } from 'src/app/domain/model/Action';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { Site } from 'src/app/domain/model/Site';
import { Processus } from 'src/app/domain/model/Processus';
import { Router } from '@angular/router';
import { Reunion } from 'src/app/domain/model/Reunion';
import { ReunionServiceService } from 'src/app/services/reunion/reunion-service.service';
import { TypeReunion } from 'src/app/domain/model/TypeReunion';

@Component({
  selector: 'app-reunion-genirque',
  templateUrl: './reunion-genirque.component.html',
  styleUrls: ['./reunion-genirque.component.css']
})
export class ReunionGenirqueComponent {

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
    private dialogRef: MatDialogRef<ReunionGenirqueComponent>,
    private snackbarService: MessageAlertService,
    private employer: EmployerServiceService,
    private reunionService: ReunionServiceService,
    private paramertageService: ParametrageServicesService
  ) { }

  fgControl = new FormControl<any | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  fg: any[] = [
    { name: 'MONO' },
    { name: 'Group' },
    { name: 'Filiale 1' },
    { name: 'Filiale 2' },
  ];


  ngOnInit(): void {
    this.getAllEmployer();
    this.fromScGenrique = this.fb.group({
      declencheur: ["", [Validators.required]],
      respoReal: ["", [Validators.required]],
      fgDeclencheur: ["", [Validators.required]]
      , fgRespReal: ["", [Validators.required]]
      

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


  public onAddScenario(): void {
    console.log(this.fromScGenrique.valid)
    const reunion = new Reunion();
    const typeReunion = new TypeReunion();
    console.log(reunion);

    const fromValue = this.fromScGenrique.value;
    console.log(fromValue);
    typeReunion.dechlencheur =fromValue.declencheur;
 
    typeReunion.pourInfo = fromValue.respoReal;
   
    typeReunion.filialeDeclencheur = fromValue.fgDeclencheur.name;
    typeReunion.filialeRealisation = fromValue.fgRespReal.name;
    reunion.typeReunion=typeReunion

  
    console.log(reunion);

    this.reunionService.addReunion(reunion).subscribe(res => {
      console.log(res);
      this.snackbarService.messageSuccess(this.message);
      this.dialogRef.close(res);
    },
      () => {
        this.snackbarService.messageErro("error lors d'ajout");


      });
    this.router.navigate(['reunion']); // Navigate to the 'other' route


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
