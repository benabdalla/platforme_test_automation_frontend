import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../_services/employee';
import { UserService } from '../_services/user.service';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';
import { ModalRemoveUserComponent } from './modal-remove-user/modal-remove-user.component';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  content?: string;
  public employees?: any[];
  public editEmployee?: any;
  public deleteEmployee?: any;
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: any[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateEmloyee(employee: any): void {
    console.log(employee);
    this.userService.updateEmployee(employee).subscribe(
      (response: any) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(employeeId: number): void {
    this.userService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees!) {
      if (
        employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: any, mode: string): void {
    if (mode === 'add') {
      this.openDialog();
    }
    if (mode === 'edit') {
      this.openDialogEdit(employee);
    }
    if (mode === 'delete') {
      this.openDialogDellet(employee);
      console.log()
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddUserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.onAddEmloyee(result);
    });
  }

  openDialogEdit(employee: any): void {
    const dialogRef = this.dialog.open(ModalEditUserComponent, {
      data: {...employee},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.onUpdateEmloyee(result);
    });
  }
  openDialogDellet(employee: any): void {
    const dialogRef = this.dialog.open(ModalRemoveUserComponent, {
      data: employee,
    });

   dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.onDeleteEmloyee(result);
    });
  }
  public onAddEmloyee(employee: any): void {
    document.getElementById('add-employee-form')?.click();
    this.userService.addEmployee(employee).subscribe(
      (response: any) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
