import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BilleventAuthService, BilleventTokenService} from './billevent-auth.service';
import {NB_AUTH_TOKEN_WRAPPER_TOKEN} from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    BilleventAuthService,
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: BilleventTokenService },
  ]
})
export class AuthModule { }
