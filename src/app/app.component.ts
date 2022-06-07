import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login/service/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-client";
  islogged: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.showNav();
  }

  showNav(): boolean | Promise<boolean> {
    return this.loginService
      .isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return (this.islogged = true);
        } else {
          return (this.islogged = false);
        }
      });
  }
}
