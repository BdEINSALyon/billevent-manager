import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BilleventAuthService} from "./billevent-auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    BilleventAuthService
  ]
})
export class AuthModule { }
