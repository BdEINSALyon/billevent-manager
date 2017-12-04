import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
import {NbCheckboxComponent, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NbLoginComponent } from './auth/login/login.component';
import { NbLogoutComponent } from './auth/logout/logout.component';
import {BilleventAuthService} from './auth/billevent-auth.service';
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    NbLoginComponent,
    NbLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: BilleventAuthService,
          config: {},
        },
      },
      forms: {},
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,

  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
