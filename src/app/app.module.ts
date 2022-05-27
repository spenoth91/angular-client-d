import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {UserListComponent} from './users/components/user-list/user-list.component';
import { BookingListComponent } from './booking/components/booking-list/booking-list.component';
import {PropertyListComponent} from "./property/components/property-list/property-list.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PropertyListComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
