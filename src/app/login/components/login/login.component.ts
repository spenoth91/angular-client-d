import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string = null;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(formLogin: NgForm) {
    this.loginService
      .login(formLogin.value.email, formLogin.value.password)
      .subscribe(
        (token) => {
          console.log(token);
          localStorage.setItem('token', token.toString());

          this.loginService.isLoggedIn = true;

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 700);
          4;
        },
        (err) => {
          console.error(err);
          this.loginService.isLoggedIn = false;
          this.error = 'Email or password incorrect!';
        }
      );
    console.log(formLogin.value);
    formLogin.reset();
  }
}
