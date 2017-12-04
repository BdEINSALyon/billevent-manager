import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private client: HttpClient) {}

  getCurrentUser() {
    return this.client.get(environment.BilleventApi + '/me').map((data) => data);
  }
}
