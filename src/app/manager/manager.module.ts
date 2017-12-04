import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagerRoutingModule} from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NbActionsModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbUserModule} from '@nebular/theme';
import {NbUser} from '@nebular/auth/models/user';
import { HeaderComponent } from './layout/header/header.component';
import {UserService} from './data/user.service';
import {JwtModule} from '@auth0/angular-jwt';
import { InvitationComponent } from './invitation/invitation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    NbActionsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbUserModule,
    ManagerRoutingModule
  ],
  providers: [NbSidebarService, UserService, ...NbMenuModule.forRoot().providers],
  declarations: [DashboardComponent, HeaderComponent, InvitationComponent, HomeComponent]
})
export class ManagerModule { }
