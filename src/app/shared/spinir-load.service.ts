import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SpinirLoadService {

  constructor() { }

  private spinnerSubject: Subject<boolean> = new Subject<boolean>();
  public spinnerState$ = this.spinnerSubject.asObservable();

  show() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }

}
