import { Component, OnDestroy, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from 'src/app/bookings/services/booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit, OnDestroy {
  bookings: Booking[];
  private subscription: Subscription;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.subscription = this.bookingService
      .getAllBookings()
      .subscribe((data) => (this.bookings = data));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
