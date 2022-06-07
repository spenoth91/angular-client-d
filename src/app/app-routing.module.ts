import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { BookingListComponent } from './bookings/components/booking-list/booking-list.component';
import { PropertyListComponent } from './property/components/property-list/property-list.component';
import { LoginComponent } from './login/components/login/login.component';
import { SignUpComponent } from './sign-up/components/sign-up.component';
import { AuthGuard } from './login/service/auth-guard.service';

const routes: Routes = [
  {
    path: 'users',
    // canActivate: [AuthGuard],
    component: UserListComponent,
  },
  {
    path: 'bookings',
    // canActivate: [AuthGuard],
    component: BookingListComponent,
  },
  {
    path: 'property',
    // canActivate: [AuthGuard],
    component: PropertyListComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
