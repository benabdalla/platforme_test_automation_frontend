import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../_services/employee';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css'],
})
export class ModalEditUserComponent {
  editEmployee: Employee;
  constructor(
    public dialogRef: MatDialogRef<ModalEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {
    this.editEmployee = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
