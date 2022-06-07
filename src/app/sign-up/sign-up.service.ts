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

  saveUser(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string
  ) {
    return this.http.post<User>(APIEndpointURLs.register, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
    });
  }
}
