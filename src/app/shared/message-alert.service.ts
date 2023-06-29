import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageAlertService {

  constructor(private snackbar:MatSnackBar) { }
messageSuccess(message:string):void{
  this.snackbar.open(message, 'ok', { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center', panelClass: 'success-snackbar',
});

}
messageErro(message:string):void{
  this.snackbar.open(message, 'ok', { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center', panelClass: 'error-snackbar',
});

}
}
