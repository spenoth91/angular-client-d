import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/users/models/user.model';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: any;
  private subscription: Subscription;
  // validInputs: boolean = false;

  constructor(private signUpService: SignUpService) {
    this.signUpService.users().subscribe((data) => (this.user = data));
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.user = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    };
  }

  getUser(data: User) {
    console.warn(data);

    this.signUpService.saveUser(data).subscribe((user) => {
      console.warn(user);
      return user;
    });
  }
}
