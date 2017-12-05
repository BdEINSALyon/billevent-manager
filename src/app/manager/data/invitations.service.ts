import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

export abstract class Invitation {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  seats: number;
  bought_seats: number;
  event: number;
  token: string;
}

@Injectable()
export class InvitationsService {

  constructor(private http: HttpClient) { }

  createMultiple(eventId: any, data: Invitation[]): Observable<Invitation>{
    return Observable.create((obs) => {
      const doNext = function () {
        const next = data.pop();
        if (next) {
          next['event_id'] = parseInt(eventId, 10);
          createNext(next);
        } else {
          obs.complete();
        }
      };
      const createNext = (post_data) => {
        this.http.post(environment.BilleventApi + '/admin/invitations/', post_data).subscribe(
          (result) => {
            obs.next(result);
            doNext();
          },
          (err) => obs.error(err)
        );
      };
      doNext();
    });
  }

}
