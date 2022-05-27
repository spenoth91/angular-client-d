import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIEndpointURLs } from '../api-endpoint-urls';
import { User } from '../users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(APIEndpointURLs.allUser);
  }

  saveUser(data: User) {
    return this.http.post(APIEndpointURLs.register, data);
  }
}
