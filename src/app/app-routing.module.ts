import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbLoginComponent } from './auth/login/login.component';
import { NbLogoutComponent } from './auth/logout/logout.component';
import {NbAuthComponent} from '@nebular/auth';

const routes: Routes = [

  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
