import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './modules/action/action.component';
import { AuditComponent } from './modules/audit/audit.component';
import { ReporatActionComponent } from './modules/action/reporat-action/reporat-action.component';
import { AddSecActionComponent } from './modules/action/add-sec-action/add-sec-action.component';
import { ActionactionSimplifierComponent } from './modules/action-simplifier/actionaction-simplifier.component';
import { ActSimplifierSepecifiqueComponent } from './modules/action-simplifier/act-simplifier-sepecifique/act-simplifier-sepecifique.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { HomeComponent } from './authentification/home/home.component';
import { BoardUserComponent } from './authentification/board-user/board-user.component';
import { LoginComponent } from './authentification/login/login.component';
import { ProfileComponent } from './authentification/profile/profile.component';
import { RegisterComponent } from './authentification/register/register.component';

const routes: Routes = [{ path: "action", component: ActionComponent }, { path: "reportaction", component: ReporatActionComponent },
{ path: "scsepcifique", component: AddSecActionComponent }, { path: "actSimplifier", component: ActionactionSimplifierComponent }, { path: "scsepcifiqueActSimplifer", component: ActSimplifierSepecifiqueComponent },
{ path: "reportactionSimplier", component: AuditComponent }, { path: "prametrage", component: ParametrageComponent }
,  { path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


