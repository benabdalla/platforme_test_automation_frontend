import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Activite } from 'src/app/domain/model/Activite';
import { Direction } from 'src/app/domain/model/Direction';
import { Processus } from 'src/app/domain/model/Processus';
import { ScenarioSiteDto } from 'src/app/domain/model/ScenarioSiteDto';
import { Site } from 'src/app/domain/model/Site';
import { TabService } from 'src/app/domain/model/TabService';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';

@Component({
  selector: 'app-add-parametrage',
  templateUrl: './add-parametrage.component.html',
  styleUrls: ['./add-parametrage.component.css']
})
export class AddParametrageComponent {
  public addCusForm!: FormGroup;
  wasFormChanged = false;
  namePanel?:String;
  message: string = "Scénario ajouté avec succès";
  prametre?:any;
  employees!: Utilisateur[];
  keyword = 'name';

 // serviceData!:TabService
  constructor(
      public dialogRef: MatDialogRef<AddParametrageComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, private router: Router, private snackbarService: MessageAlertService,
    private employer: EmployerServiceService, private snackbar: MatSnackBar,
    private paramertageService: ParametrageServicesService, private fromBuilder: FormBuilder
  ) { }
  


  ngOnInit() {
    this.createForm();
 this.getAllEmployer();
  }

  createForm() {
    this.addCusForm = this.fromBuilder.group({
      service: ['', [Validators.required]],
      fgRespClot: ['', [Validators.required]],
      declencheur: ['', [Validators.required]],
   
    });

    this.parmetres();

  }
  modifPram():void{

    console.log(this.addCusForm.valid)
    const fromValue = this.addCusForm.value;
    console.log(fromValue);
    if(this.namePanel==="Service"){
      this.addService(fromValue.service);
    }
    if(this.namePanel==="Site"){
      this.addSite();
    }
    if(this.namePanel==="Processus"){
      this.addProcessu(fromValue.service);
    }
    if(this.namePanel==="Activite"){
      this.addActivite(fromValue.service);
    }
    if(this.namePanel==="Direction"){
      this.adddirection(fromValue.service);
    }

    this.dialogRef.close({data:"ok"});

  }



  parmetres():void{
    this.namePanel =this.data.name


  }
addService(name:string){
  console.log(name)
  const serviceData = new TabService();
  serviceData.service=name;
  this.paramertageService.addService(serviceData).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}
fgControl = new FormControl<any | null>(null, Validators.required);
selectFormControl = new FormControl('', Validators.required);
fg: any[] = [
  { name: 'Mono' },
  { name: 'Group' },
  { name: 'Filiale 1' },
  { name: 'Filiale 2' },
];

addSite(){
  console.log(this.addCusForm.valid)
  const siteScenaro = new ScenarioSiteDto();
const siteTab =new Site();
  const fromValue = this.addCusForm.value;
  console.log(fromValue);
  console.log()
  siteTab.site=fromValue.service;
  siteScenaro.site =siteTab;
  siteScenaro.filialeDeclencheur=fromValue.fgRespClot.name;
  console.log(fromValue.dechlencheur)
  siteScenaro.dechlencheur=fromValue.declencheur;
 console.log(siteScenaro)
  this.paramertageService.addSite(siteScenaro).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)
  
},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}

getAllEmployer(): void {
  this.employer.getAllEmployer().subscribe((response: Utilisateur[]) => {
    this.employees = response;
    console.log(this.employees);
    }
  );
}

addProcessu(name:string){
  console.log(name)
  const serviceData = new Processus();
  serviceData.processus=name;
  this.paramertageService.addProcess(serviceData).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}
addActivite(name:string){
  console.log(name)
  const serviceData = new Activite();
  serviceData.activite=name;
  this.paramertageService.addActivite(serviceData).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}
adddirection(name:string){
  console.log(name)
  const serviceData = new Direction();
  serviceData.direction=name;
  this.paramertageService.addDirection(serviceData).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
//  this.router.navigate(['prametrage']); // Navigate to the 'other' route

}




}
