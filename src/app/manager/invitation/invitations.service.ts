import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {LocalDataSource} from 'ng2-smart-table';

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
export class InvitationsService extends LocalDataSource {

  data: Invitation[];

  constructor(private http: HttpClient) {
    super([]);
    this.getInvitations().subscribe(
      (invitations) => {
        this.data = invitations;
        return super.load(invitations);
      }
    );
  }

  getInvitations(): Observable<Invitation[]> {
    return <Observable<Invitation[]>>this.http.get(environment.BilleventApi + '/admin/invitations/');
  }

  update(element: Invitation, values: Invitation): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.BilleventApi + '/admin/invitations/' + element.id + '/', values).subscribe(
        () => resolve(super.update(element, values)),
        reject
      );
    });
  }
}
