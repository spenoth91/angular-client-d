import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Property } from "../models/property.model";
import { APIEndpointURLs } from "../../api-endpoint-urls";
import { User } from "src/app/users/models/user.model";
import { Booking } from "src/app/bookings/models/booking.model";

@Injectable({
  providedIn: "root",
})
export class PropertyService {
  property: Property;
  user: User;
  booking: Booking;

  constructor(private http: HttpClient) {}

  public getAllProperty(): Observable<Property[]> {
    return this.http.get<Property[]>(APIEndpointURLs.allProperty);
  }

  saveProperty(
    name: string,
    address: string,
    price: string,
    people_capacity: string,
    room: string,
    mp2: string,
    description: string,
    picture: string
  ) {
    // const headers = new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*');

    return this.http.post<Property>(
      APIEndpointURLs.saveProperty,
      {
        name: name,
        address: address,
        price: price,
        people_capacity: people_capacity,
        room: room,
        mp2: mp2,
        description: description,
        picture: picture,
      }
      // ,
      // { headers: headers }
    );
  }

  public getFilteredProperties(
    name: string,
    min: string,
    max: string,
    room: string,
    minArea: string,
    maxArea: string
  ) {
    let searchParams = new HttpParams()
      .set("token", name)
      .set("minPrice", min)
      .set("maxPrice", max)
      .set("room", room)
      .set("minArea", minArea)
      .set("maxArea", maxArea);
    console.log(searchParams);
    return this.http.get<Property[]>(APIEndpointURLs.getFilteredProperties, {
      params: searchParams,
    });
  }

  public sortUpProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(APIEndpointURLs.sortUpProperties);
  }

  public sortDownProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(APIEndpointURLs.sortDownProperties);
  }

  public deletePropertyById(id: string) {
    return this.http.delete(APIEndpointURLs.deleteProperty + id);
  }

  public updateProperty(
    id: string,
    name: string,
    address: string,
    price: string,
    people_capacity: string,
    room: string,
    mp2: string,
    description: string,
    picture: string
  ) {
    return this.http.put(APIEndpointURLs.updateProperty, {
      id: id,
      name: name,
      price: price,
      address: address,
      people_capacity: people_capacity,
      room: room,
      mp2: mp2,
      description: description,
      picture: picture,
    });
  }

  public rentProperty(
    property: Property,
    user: User,
    start_date: string,
    end_date: string
  ) {
    return this.http.post(APIEndpointURLs.rentProperty, {
      property: property,
      user: user,
      start_date: start_date,
      end_date: end_date,
    });
  }
}
