import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu: NbMenuItem[] = [
    {title: 'Invitations', link: '/invitations'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
