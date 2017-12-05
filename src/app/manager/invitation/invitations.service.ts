import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {LocalDataSource} from 'ng2-smart-table';
import {Invitation} from '../data/invitations.service';

export const Invitation = Invitation;

@Injectable()
export class InvitationsTableService extends LocalDataSource {

  data: Invitation[];

  constructor(private http: HttpClient) {
    super([]);
  }


  load(data: Array<any>): Promise<any> {
    if (data.length >= 1) {
      return super.load(data);
    }
    return new Promise((resolve, reject) => {
      this.getInvitations().subscribe(
        (invitations) => {
          this.data = invitations;
          resolve(super.load(invitations));
        },
        reject
      );
    });
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
