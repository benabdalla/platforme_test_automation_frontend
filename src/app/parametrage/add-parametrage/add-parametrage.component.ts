import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Activite } from 'src/app/domain/model/Activite';
import { Direction } from 'src/app/domain/model/Direction';
import { Processus } from 'src/app/domain/model/Processus';
import { ScenarioActiviteDto } from 'src/app/domain/model/ScenarioActiviteDto';
import { ScenarioDirectionDto } from 'src/app/domain/model/ScenarioDirectionDto';
import { ScenarioPrcocessDto } from 'src/app/domain/model/ScenarioProcessus';
import { ScenarioServiceDto } from 'src/app/domain/model/ScenarioService';
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
      this.addProcessu();
    }
    if(this.namePanel==="Activite"){
      this.addActivite();
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
  console.log(this.addCusForm.valid)
  const  scenarioActiviteDto= new ScenarioServiceDto();
const tabService =new TabService();
  const fromValue = this.addCusForm.value;
  console.log(fromValue);
  console.log()
  tabService.service=fromValue.service;
  scenarioActiviteDto.tabService =tabService;
  scenarioActiviteDto.filialeDeclencheur=fromValue.fgRespClot.name;
  console.log(fromValue.dechlencheur)
  scenarioActiviteDto.dechlencheur=fromValue.declencheur;
 console.log(scenarioActiviteDto)
  this.paramertageService.addService(scenarioActiviteDto).subscribe(res=>{
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
    console.log("employes");

    console.log(this.employees);
    }
  );
}

addProcessu(){
  console.log(this.addCusForm.valid)
  const processusDto = new ScenarioPrcocessDto();
const processus =new Processus();
  const fromValue = this.addCusForm.value;
  console.log(fromValue);
  console.log()
  processus.processus=fromValue.service;
  processusDto.processus =processus;
  processusDto.filialeDeclencheur=fromValue.fgRespClot.name;
  console.log(fromValue.dechlencheur)
  processusDto.dechlencheur=fromValue.declencheur;
 console.log(processusDto)
  this.paramertageService.addProcess(processusDto).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}
addActivite(){
  console.log(this.addCusForm.valid)
  const activiteDto = new ScenarioActiviteDto();
const activite =new Activite();
  const fromValue = this.addCusForm.value;
  console.log(fromValue);
  console.log()
  activite.activite=fromValue.service;
  activiteDto.activite =activite;
  activiteDto.filialeDeclencheur=fromValue.fgRespClot.name;
  console.log(fromValue.dechlencheur)
  activiteDto.dechlencheur=fromValue.declencheur;
 console.log(activiteDto)
  this.paramertageService.addActivite(activiteDto).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
  this.router.navigate(['prametrage']); // Navigate to the 'other' route
}
adddirection(name:string){
  console.log(this.addCusForm.valid)
  const ScenarioActiviteDto = new ScenarioDirectionDto();
const direction =new Direction();
  const fromValue = this.addCusForm.value;
  console.log(fromValue);
  console.log()
  direction.direction=fromValue.service;
  ScenarioActiviteDto.direction =direction;
  ScenarioActiviteDto.filialeDeclencheur=fromValue.fgRespClot.name;
  console.log(fromValue.dechlencheur)
  ScenarioActiviteDto.dechlencheur=fromValue.declencheur;
 console.log(ScenarioActiviteDto)
  this.paramertageService.addDirection(ScenarioActiviteDto).subscribe(res=>{
  this.snackbarService.messageSuccess(this.message)

},
  (error) => {
    this.snackbarService.messageErro("error lors d'ajout");


  });
//  this.router.navigate(['prametrage']); // Navigate to the 'other' route

}




}
