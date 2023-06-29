import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './modules/action/action.component';
import { AuditComponent } from './modules/audit/audit.component';

const routes:Routes =[{path:"action",component:ActionComponent},
{path:"audit",component:AuditComponent}]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule { }


