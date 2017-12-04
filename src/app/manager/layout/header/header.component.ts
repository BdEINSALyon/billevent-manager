import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import {UserService} from '../../data/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [ { title: 'Déconnexion',  link: '/auth/logout'}];

  constructor(private sidebarService: NbSidebarService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe((user: any) => this.user = user);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome(){
    this.router.navigateByUrl('/');
  }
}
