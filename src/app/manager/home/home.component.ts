import { Component, OnInit } from '@angular/core';
import {BilleventEvent, EventsService} from '../data/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: BilleventEvent[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((events) => this.events = events);
  }

}
