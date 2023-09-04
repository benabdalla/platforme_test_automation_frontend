import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    jobTitle:null ,
    phone:null 
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password,jobTitle, phone} = this.form;

    this.authService.register(username, email, password,jobTitle, phone).subscribe(
     (data) => {
        console.log(data);
        if(data!=null){
        this.isSuccessful = true;
        this.isSignUpFailed = false;}
        else{
          this.isSignUpFailed = true;
        }
      }
    );
  }
}
