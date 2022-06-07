import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { BookingListComponent } from './bookings/components/booking-list/booking-list.component';
import { PropertyListComponent } from './property/components/property-list/property-list.component';
import { SignUpComponent } from './sign-up/components/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/components/login/login.component';
import { AuthGuard } from './login/service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PropertyListComponent,
    BookingListComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
