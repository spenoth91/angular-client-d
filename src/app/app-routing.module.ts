import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./users/components/user-list/user-list.component";
import { BookingListComponent } from "./booking/components/booking-list/booking-list.component";
import {PropertyListComponent} from "./property/components/property-list/property-list.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "bookings", component: BookingListComponent },
  { path: "property", component: PropertyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
