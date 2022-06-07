import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIEndpointURLs } from "src/app/api-endpoint-urls";
import { User } from "src/app/users/models/user.model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<User>(APIEndpointURLs.login, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  isAuthenticated() {
    const promise = new Promise((resolve) => {
      resolve(this.isLoggedIn);
    });

    return promise;
  }
}
