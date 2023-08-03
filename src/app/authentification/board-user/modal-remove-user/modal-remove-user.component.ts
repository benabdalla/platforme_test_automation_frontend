import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../_services/employee';


@Component({
  selector: 'app-modal-remove-user',
  templateUrl: './modal-remove-user.component.html',
  styleUrls: ['./modal-remove-user.component.css']
})
export class ModalRemoveUserComponent {

  deleteEmployee: Employee;
  constructor(
    public dialogRef: MatDialogRef<ModalRemoveUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {
    this.deleteEmployee = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

