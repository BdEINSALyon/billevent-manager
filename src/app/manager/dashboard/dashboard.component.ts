import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu: NbMenuItem[] = [
    {title: 'Dashboard', link: '/', pathMatch: 'full'},
    {title: 'Invitation', link: '/invitations', pathMatch: 'full'},
    {title: 'Admin'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
