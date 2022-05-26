// @ts-ignore
import {Component, OnDestroy, OnInit} from "@angular/core";
import {User} from "../../models/user.model";
import {Subscription} from "rxjs";
import {UserService} from "../../services/user.service";
import {Booking} from "../../models/booking.model";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit, OnDestroy {
  booking: Booking[];
  private subscription: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.subscription = this.bookingService.getAllBooking().subscribe(data => this.booking = data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
