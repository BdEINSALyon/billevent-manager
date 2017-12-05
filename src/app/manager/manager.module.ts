import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagerRoutingModule} from './manager-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NbActionsModule, NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbUserModule} from '@nebular/theme';
import {NbUser} from '@nebular/auth/models/user';
import {HeaderComponent} from './layout/header/header.component';
import {UserService} from './data/user.service';
import {JwtModule} from '@auth0/angular-jwt';
import {InvitationComponent, InvitationLinkComponent} from './invitation/invitation.component';
import {HomeComponent} from './home/home.component';
import {InvitationsTableService} from './invitation/invitations.service';
import {EventsService} from './data/events.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewInvitationComponent } from './invitation/new-invitation/new-invitation.component';
import { EditInvitationComponent } from './invitation/edit-invitation/edit-invitation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvitationsService} from './data/invitations.service';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NbActionsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbUserModule,
    ManagerRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [
    NbSidebarService,
    UserService,
    ...NbMenuModule.forRoot().providers,
    InvitationsTableService,
    InvitationsService,
    EventsService
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    InvitationComponent,
    HomeComponent,
    InvitationLinkComponent,
    NewInvitationComponent,
    EditInvitationComponent
  ]
})
export class ManagerModule {
}
