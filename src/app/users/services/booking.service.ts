import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../models/property.model';
import {APIEndpointURLs} from '../../api-endpoint-urls';
import {Booking} from "../models/booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {}

  public getAllBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>(APIEndpointURLs.allBooking);
  }
}
