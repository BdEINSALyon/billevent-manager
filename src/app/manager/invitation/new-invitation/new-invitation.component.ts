import {Component, OnInit} from '@angular/core';
import {BilleventEvent, EventsService} from '../../data/events.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-invitation',
  templateUrl: './new-invitation.component.html',
  styleUrls: ['./new-invitation.component.scss']
})
export class NewInvitationComponent implements OnInit {

  events: BilleventEvent[];
  invitationForm: FormGroup;

  constructor(private eventsService: EventsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(
      (events) => this.events = events
    );
    this.createForm()
  }
  createForm() {
    this.invitationForm = this.fb.group({
      name: '',
    });
  }

}
