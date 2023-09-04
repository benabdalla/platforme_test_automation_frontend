import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ModalEditUserComponent } from '../board-user/modal-edit-user/modal-edit-user.component';
import { Employee } from '../_services/employee';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;


  constructor(private token: TokenStorageService,private userService:UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.token.getUser)
    this.currentUser = this.token.getUser();
this.userService.getEmployee(this.currentUser.id).subscribe((res)=>{
  this.currentUser=res;
})

  }


  public onOpenModal(employee: any): void {
   
      this.openDialogEdit(employee);
    

  }


  openDialogEdit(employee: Employee): void {
    const dialogRef = this.dialog.open(ModalEditUserComponent, {
      data: {...employee},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.onUpdateEmloyee(result);
    });
  }
  public onUpdateEmloyee(employee: any): void {
    console.log(employee);
    this.userService.updateEmployee(employee).subscribe(
      (response: any) => {
        console.log(response);
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




}
