import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

export abstract class BilleventEvent {
  id: number;
  name: string;
  description: string;
  website: string;
  place: string;
  address: string;
}

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<BilleventEvent[]> {
    return <Observable<BilleventEvent[]>>this.http.get(environment.BilleventApi + '/admin/events/');
  }

  getEvent(id: number|string): Observable<BilleventEvent> {
    return <Observable<BilleventEvent>>this.http.get(environment.BilleventApi + '/admin/events/' + id + '/');
  }

}
