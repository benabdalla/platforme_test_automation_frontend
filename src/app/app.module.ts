import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActionComponent } from './modules/action/action.component';
import { AuditComponent } from './modules/audit/audit.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddSecActionComponent } from './modules/action/add-sec-action/add-sec-action.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddactiongenriqueComponent } from './modules/action/addactiongenrique/addactiongenrique.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionComponent,
    AuditComponent,
    AddSecActionComponent,
    AddactiongenriqueComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule,AutocompleteLibModule,MatSnackBarModule,
    BrowserAnimationsModule,AppMaterialModule,FlexLayoutModule,MatNativeDateModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
