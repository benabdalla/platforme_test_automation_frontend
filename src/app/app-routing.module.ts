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
import { RapportComponent } from './parametrage/rapport/rapport.component';
import { IsSignedInGuard } from './shared/is-user-connected.guard';
import { ActSimplifierReportComponent } from './modules/action-simplifier/act-simplifier-report/act-simplifier-report.component';
import { DemandeAtionComponent } from './modules/demande-action/demande-ation.component';
import { ReportScenarioComponent } from './modules/demande-action/report-scenario/report-scenario.component';
import { ReunionComponent } from './modules/reunion/reunion.component';
import { ReunionReportComponent } from './modules/reunion/reunion-report/reunion-report.component';

const routes: Routes = [
  { path: "action", component: ActionComponent, canActivate: [IsSignedInGuard]},
  { path: "reportaction", component: ReporatActionComponent, canActivate: [IsSignedInGuard] },
  { path: "scsepcifique", component: AddSecActionComponent,canActivate: [IsSignedInGuard] },
  { path: "actSimplifier", component: ActionactionSimplifierComponent,canActivate: [IsSignedInGuard] },
  { path: "scsepcifiqueActSimplifer", component: ActSimplifierSepecifiqueComponent ,canActivate: [IsSignedInGuard]},
  { path: "reportactionSimplier", component: AuditComponent ,canActivate: [IsSignedInGuard]},
  { path: "prametrage", component: ParametrageComponent ,canActivate: [IsSignedInGuard]},
  { path: 'home', component: HomeComponent ,canActivate: [IsSignedInGuard]},
  { path: 'report/action/simplifier', component: ActSimplifierReportComponent ,canActivate: [IsSignedInGuard]},
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent,canActivate: [IsSignedInGuard]},
  { path: 'user', component: BoardUserComponent,canActivate: [IsSignedInGuard] },
  { path: 'parametrage/rapport/:name', component: RapportComponent ,canActivate: [IsSignedInGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'demande/action', component: DemandeAtionComponent,canActivate: [IsSignedInGuard]},
  { path: 'report/demande/action', component: ReportScenarioComponent ,canActivate: [IsSignedInGuard]},
  { path: 'reunion', component: ReunionComponent ,canActivate: [IsSignedInGuard]},
  { path: 'reunion/report', component: ReunionReportComponent ,canActivate: [IsSignedInGuard]}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


