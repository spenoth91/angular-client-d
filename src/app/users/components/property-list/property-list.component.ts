import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';
import {Property} from "../../models/property.model";
import {PropertyService} from "../../services/property.service";

// @ts-ignore
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy {
  property: Property[];
  private subscription: Subscription;


  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.subscription = this.propertyService.getAllProperty().subscribe(data => this.property = data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
