import {Component, OnInit, ViewChild} from '@angular/core';
import {BilleventEvent, EventsService} from '../../data/events.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as CsvParse from 'csv-parse';
import {Invitation} from '../invitations.service';
import {InvitationsService} from '../../data/invitations.service';

@Component({
  selector: 'app-new-invitation',
  templateUrl: './new-invitation.component.html',
  styleUrls: ['./new-invitation.component.scss']
})
export class NewInvitationComponent implements OnInit {

  events: BilleventEvent[];
  event: number|string;
  invitationForm: FormGroup;
  @ViewChild('csvFile') fileInput;
  ready = false;
  importing = false;
  data: Invitation[];
  importedCount = 0;
  importedTotal = 0;

  constructor(private eventsService: EventsService,
              private fb: FormBuilder,
              private invitationsService: InvitationsService) {
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(
      (events) => {
        if (events[0]) {
          this.event = events[0].id.toString();
        }
        return this.events = events;
      }
    );
  }

  importCSV(event) {
    if (this.ready) {
      this.importing = true;
      this.importedTotal = this.data.length;
      this.invitationsService.createMultiple(this.event, this.data).subscribe(
        (i) => {
          this.importedCount++;
        },
        (err) => {
          alert('Erreur à l\'importation');
        }
      );
    }
    event.preventDefault();
    return false;
  }

  loadCSV() {
    const input: HTMLInputElement = this.fileInput.nativeElement;
    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;
      CsvParse(content, {columns: true}, (err, data) => {
        if (err) {
          console.error(err);
          alert('Erreur à la lecture du fichier');
          return;
        }
        if (data.length < 1) {
          alert('Fichier vide');
          return;
        }
        const fr = data[0]; // first row
        if (!(
            fr.hasOwnProperty('first_name') &&
            fr.hasOwnProperty('last_name') &&
            fr.hasOwnProperty('email') &&
            fr.hasOwnProperty('seats'))) {
          alert('Le fichier CSV doit contenir les colonnes first_name, last_name, email, seats');
          return;
        }
        this.data = data;
        this.ready = true;
      });
    };
    reader.readAsText(input.files[0]);
  }
}
