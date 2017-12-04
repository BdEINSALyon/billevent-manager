import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagerRoutingModule} from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NbActionsModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbUserModule} from '@nebular/theme';
import {NbUser} from '@nebular/auth/models/user';
import { HeaderComponent } from './layout/header/header.component';
import {UserService} from './data/user.service';
import {JwtModule} from '@auth0/angular-jwt';

@NgModule({
  imports: [
    CommonModule,
    NbActionsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbUserModule,
    ManagerRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('auth_app_token');
        },
        authScheme: 'JWT ',
        whitelistedDomains: ['localhost:8000', 'api.billevent.bde-insa-lyon.fr']
      }
    })
  ],
  providers: [NbSidebarService, UserService],
  declarations: [DashboardComponent, HeaderComponent]
})
export class ManagerModule { }
