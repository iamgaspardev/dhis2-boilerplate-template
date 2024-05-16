// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRequestComponent } from './create-request/create-request.component';
import { LockRequestsComponentContent } from './lock-requests/lock-requests.component';

const routes: Routes = [
  { path: 'manage-exception', component: LockRequestsComponentContent },
  { path: 'user-create', component: CreateRequestComponent },
  { path: '', redirectTo: '/manage-exception', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
