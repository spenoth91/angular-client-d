import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isSucceeded: boolean = false;
  msg: string;

  constructor(private signUpService: SignUpService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const phone = form.value.phone;
    const password = form.value.password;

    this.signUpService
      .saveUser(firstName, lastName, email, phone, password)
      .subscribe(() => {
        if (this.isSucceeded) {
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 4000);

          this.msg = 'Registration successful';
        } else this.msg = 'One or more fields are not valid!';
      });

    form.reset();
  }
}
