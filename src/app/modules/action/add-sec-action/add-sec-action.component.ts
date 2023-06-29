import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      source: [null,[Validators.required]],
      type : null,
      priorite : null ,
      gravite : null ,
      resptraitement : null ,
      respcloture : null ,
      respSuivi : null ,
      type_cause : null ,
      designation : null ,
      description : null ,
      site : null ,
      processus : null ,
      activite : null ,
      direction : null ,
      service : null ,
      Desi_SA : null ,
      date_realisation : null ,
      taux_realisation : null ,
      date_suivi : null ,
      taux_suivi : null ,
      date_création : null ,
      produit : null ,
      dechlencheur : null ,
    });
    this.breakpoint = window.innerWidth <= 900 ? 1 : 2; // Breakpoint observer code
  }

  public onAddCus(): void {
    this.markAsDirty(this.addCusForm);
  }
  get f(){
    return this.addCusForm.controls;
  }
  openDialog(): void {
    console.log(this.wasFormChanged);
    if(this.addCusForm.dirty) {
     
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
      console.log( group.controls[i].value);
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }


}


