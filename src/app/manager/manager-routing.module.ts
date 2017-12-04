import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth-guard.service';
import {InvitationComponent} from './invitation/invitation.component';
import {HomeComponent} from './home/home.component';
import {NewInvitationComponent} from './invitation/new-invitation/new-invitation.component';
import {EditInvitationComponent} from './invitation/edit-invitation/edit-invitation.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'invitations',
        component: InvitationComponent
      },
      {
        path: 'invitations/new',
        component: NewInvitationComponent
      },
      {
        path: 'invitations/:id',
        component: EditInvitationComponent
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
