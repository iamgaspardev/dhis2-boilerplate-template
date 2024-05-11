// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponentContent } from './app.component';
import { CreateRequestComponent } from './create-request/create-request.component';

const routes: Routes = [
  { path: 'user-create', component: AppComponentContent },
  { path: 'manage-exception', component: CreateRequestComponent },
  { path: '', redirectTo: '/user-create', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
