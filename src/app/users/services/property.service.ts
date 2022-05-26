import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../models/property.model';
import {APIEndpointURLs} from '../../api-endpoint-urls';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {}

  public getAllProperty(): Observable<Property[]> {
    return this.http.get<Property[]>(APIEndpointURLs.allProperty);
  }
}
