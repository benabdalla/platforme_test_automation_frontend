import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Parametrage } from 'src/app/domain/model/Parametrage';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { ParametrageServicesService } from 'src/app/services/parametrage/parametrage-services.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';

@Component({
  selector: 'app-edit-prametrage',
  templateUrl: './edit-prametrage.component.html',
  styleUrls: ['./edit-prametrage.component.css']
})
export class EditPrametrageComponent {
  
  public addCusForm!: FormGroup;
  wasFormChanged = false;
  message: string = "Scénario ajouté avec succès";
  prametre?:any;
  constructor(
      public dialogRef: MatDialogRef<EditPrametrageComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,

    public dialog: MatDialog, private router: Router, private snackbarService: MessageAlertService,
    private employer: EmployerServiceService, private snackbar: MatSnackBar,
    private paramertageService: ParametrageServicesService, private fromBuilder: FormBuilder
  ) { }
  


  ngOnInit() {
    this.createForm();
 
  }

  createForm() {
    this.addCusForm = this.fromBuilder.group({
      'url': ['', [Validators.required]],
      'langue': ['', Validators.required],
      'navigateur': ['', [Validators.required]],
    });

    this.parmetres();


    this.addCusForm = this.fromBuilder.group({
      url: [this.prametre?.url, [Validators.required]],
      langue: [this.prametre?.verssion, [Validators.required]],
      navigateur: [this.prametre?.navigateur, [Validators.required]],
  })

  }
  modifPram():void{

    console.log(this.addCusForm.valid)
    const parameters = new Parametrage();
    const fromValue = this.addCusForm.value;
    console.log(fromValue);
    this.prametre.url = fromValue.url;
    this.prametre.verssion = fromValue.langue;
    this.prametre.navigateur = fromValue.navigateur;
    this.paramertageService.modifParametre(this.prametre).subscribe(
    
    (response) => {
      console.log('User updated successfully:', response);
      // Handle success response and update UI if needed
      this.router.navigate(['prametrage']);

      this.snackbarService.messageSuccess('User updated successfully')

    },
    (error) => {
      console.error('Error updating user:', error);
      // Handle error response and display appropriate message
      this.snackbarService.messageErro('Error updating user')
    }
  );
 this.dialogRef.close({data:"ok"});
  }



  parmetres():void{
    const id =this.data.idParam;
    console.log(id);
    this.paramertageService.getParametre(id).subscribe((res:any)=>{
      console.log(res)
      this.prametre=res;
      console.log(this.prametre);
      
    })

  }






}
