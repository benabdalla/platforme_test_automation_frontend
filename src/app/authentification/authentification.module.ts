import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardUserComponent } from './board-user/board-user.component';
import { ModalAddUserComponent } from './board-user/modal-add-user/modal-add-user.component';
import { ModalEditUserComponent } from './board-user/modal-edit-user/modal-edit-user.component';
import { ModalRemoveUserComponent } from './board-user/modal-remove-user/modal-remove-user.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Authentification2 } from './app.authentification';
@NgModule({
  declarations: [
  
    
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    ModalAddUserComponent,
    ModalEditUserComponent,
    ModalRemoveUserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,MatCardModule,CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [Authentification2],
})
export class AuthentificationModule { }
