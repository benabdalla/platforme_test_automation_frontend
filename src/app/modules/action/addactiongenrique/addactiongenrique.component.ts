import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'src/app/domain/model/Action';
import Utilisateur from 'src/app/domain/model/Utilisateur';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';
import { EmployerServiceService } from 'src/app/services/employer-service.service';
import { MessageAlertService } from 'src/app/shared/message-alert.service';

@Component({
  selector: 'app-addactiongenrique',
  templateUrl: './addactiongenrique.component.html',
  styleUrls: ['./addactiongenrique.component.css']
})
export class AddactiongenriqueComponent {
  public breakpoint!: number; // Breakpoint observer code
  public fromScGenrique!: FormGroup;
  public employees!: Utilisateur[];
  wasFormChanged = false;
  message: string = "Scénario ajouté avec succès";

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,private snackbarService :MessageAlertService
    , private employer: EmployerServiceService, private snackbar: MatSnackBar, private serviceAction: ActionServiceService
  ) { }

  public ngOnInit(): void {
    this.getAllEmployer();

    this.fromScGenrique = this.fb.group({
      declencheur: [null, [Validators.required]],
      respoSuiv: [null, [Validators.required]],
      respcloture: [null, [Validators.required]],
      respoReal: [null, [Validators.required]]
    });
    this.breakpoint = window.innerWidth <= 9000 ? 1 : 2; // Breakpoint observer code
  }

  getAllEmployer(): void {
    this.employer.getAllEmployer().subscribe((response: Utilisateur[]) => {
      this.employees = response;
      console.log(this.employees);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddScenario(): void {
    const action = new Action();
    const fromValue = this.fromScGenrique.value;
    console.log(fromValue);
    action.respSuivi = fromValue.respoSuiv;
    action.respCloture = fromValue.respcloture;
    action.respTraitement = fromValue.respoReal;
    action.dechlencheur = fromValue.declencheur;
    console.log(action);

    this.serviceAction.addAction(action).subscribe(res => {
      console.log(res);
      this.snackbarService.messageSuccess(this.message);
      this.dialog.closeAll();
    },
      (error) => {
        // Handle error
        console.error('Failed to add item:', error);
        this.snackbarService.messageSuccess("error lors d'ajout");


      });

  }


  get f() {
    return this.fromScGenrique.controls;
  }
  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.fromScGenrique.dirty) {

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

}
