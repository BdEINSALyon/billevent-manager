import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth-guard.service';
import {InvitationComponent} from './invitation/invitation.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'invitations',
        component: InvitationComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
