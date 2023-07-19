import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { DetailsSceanarioComponent } from './modules/action/details-sceanario/details-sceanario.component';
import { ReporatActionComponent } from './modules/action/reporat-action/reporat-action.component';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActionactionSimplifierComponent } from './modules/action-simplifier/actionaction-simplifier.component';
import { ActSimplifierSepecifiqueComponent } from './modules/action-simplifier/act-simplifier-sepecifique/act-simplifier-sepecifique.component';
import { ActSimplifierGeniriqueComponent } from './modules/action-simplifier/act-simplifier-genirique/act-simplifier-genirique.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { EditPrametrageComponent } from './parametrage/edit-prametrage/edit-prametrage.component';
import { SiteComponent } from './parametrage/site/site.component';
import { ProcessusComponent } from './parametrage/processus/processus.component';
import { DirectionComponent } from './parametrage/direction/direction.component';
import { ActiviteComponent } from './parametrage/activite/activite.component';
import { ServiceCompantComponent } from './parametrage/service-compant/service-compant.component';
import { AddParametrageComponent } from './parametrage/add-parametrage/add-parametrage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionComponent,
    AuditComponent,
    AddSecActionComponent,
    AddactiongenriqueComponent, DetailsSceanarioComponent, ReporatActionComponent, ActionactionSimplifierComponent,ActSimplifierSepecifiqueComponent,ActSimplifierGeniriqueComponent, ParametrageComponent, EditPrametrageComponent,SiteComponent, ProcessusComponent, DirectionComponent, ActiviteComponent, ServiceCompantComponent, AddParametrageComponent

  ],
  imports: [MatInputModule,
    NgFor, NgIf,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule, ReactiveFormsModule, FormsModule, MatCardModule,
    AppRoutingModule, AutocompleteLibModule, MatSnackBarModule,
    BrowserAnimationsModule, AppMaterialModule, FlexLayoutModule, MatNativeDateModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
