import {Component, Input, OnInit} from '@angular/core';
import {Invitation, InvitationsTableService} from './invitations.service';
import {BilleventEvent, EventsService} from '../data/events.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invitation-link',
  template: `<span>{{link}}</span>`
})
export class InvitationLinkComponent implements OnInit{

  @Input() value: string | number;
  @Input() rowData: any;

  link: string;

  ngOnInit(): void {
    this.link = environment.BilleventFrontend + 'invitation/' + this.value;
  }
}

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  invitations: Invitation[];
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        editable: false,
      },
      first_name: {
        title: 'Prénom'
      },
      last_name: {
        title: 'Nom'
      },
      email: {
        title: 'Email'
      },
      seats: {
        title: 'Places'
      },
    }
  };
  public events: BilleventEvent[];


  constructor(
    public invitationsService: InvitationsTableService,
    private eventService: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (events) => {
        return this.events = events;
      }
    );
    this.invitationsService.load([]);
  }

  userRowSelect(event) {
    console.log('Hey', event);
  }

  newInvite() {
    this.router.navigateByUrl('/invitations/new');
  }


}
