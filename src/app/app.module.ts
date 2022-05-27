import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TableModule } from "primeng/table";
import { UserListComponent } from "./users/components/user-list/user-list.component";
import { BookingListComponent } from "./bookings/components/booking-list/booking-list.component";

@NgModule({
  declarations: [AppComponent, UserListComponent, BookingListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
