import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
// import { setTimeout } from 'timers';
import { Property } from "../../models/property.model";
import { PropertyService } from "../../services/property.service";

// @ts-ignore
@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  property: Property[];

  addForm: boolean = false;
  filter_form: boolean = false;

  sort: string = "Sort by price ⬆";

  propertyToUpdate: Property = {
    id: "",
    name: "",
    price: "",
    address: "",
    people_capacity: "",
    room: "",
    mp2: "",
    description: "",
    picture: "",
  };

  private subscription: Subscription;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.subscription = this.propertyService
      .getAllProperty()
      .subscribe((data) => (this.property = data));
  }

  onSubmitAdd(form: NgForm) {
    const name = form.value.name;
    const address = form.value.address;
    const price = form.value.price;
    const capacity = form.value.capacity;
    const room = form.value.room;
    const mp2 = form.value.mp2;
    const description = form.value.description;
    const picture = form.value.picture;

    console.log(form.value);
    console.log(
      name,
      address,
      price,
      capacity,
      room,
      mp2,
      description,
      picture
    );

    this.propertyService
      .saveProperty(
        name,
        address,
        price,
        capacity,
        room,
        mp2,
        description,
        picture
      )
      .subscribe((res) => {
        console.log(res);
        this.cancelOptions();
        this.addForm = false;
      });
  }

  onSubmitFilter(form: NgForm) {
    let name = form.value.name.trim();
    let minPrice = form.value.minPrice.trim();
    let maxPrice = form.value.maxPrice.trim();
    let room = form.value.rooms.trim();
    let minArea = form.value.minArea.trim();
    let maxArea = form.value.maxArea.trim();

    this.propertyService
      .getFilteredProperties(name, minPrice, maxPrice, room, minArea, maxArea)
      .subscribe(
        (data) => {
          this.property = data;
          this.filter_form = false;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  displayAddForm() {
    this.addForm = true;
  }

  displayFilterForm() {
    this.filter_form = true;
  }

  sortProp() {
    if (this.sort === "Sort by price ⬆") {
      this.propertyService.sortUpProperties().subscribe((data) => {
        this.property = data;

        this.sort = "Sort by price ⬇";
      }),
        (err) => {
          console.log(err);
        };
    } else {
      this.propertyService.sortDownProperties().subscribe(
        (data) => {
          this.property = data;

          this.sort = "Sort by price ⬆";
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  cancelOptions() {
    this.propertyService
      .getAllProperty()
      .subscribe((data) => (this.property = data));
  }

  rentProp() {
    console.log();
  }

  deleteProperty(property: Property) {
    this.propertyService.deletePropertyById(property.id).subscribe(
      (data) => {
        console.log(data);
        this.cancelOptions();
      },
      (err) => console.log(err)
    );
  }

  onSubmitUpdateProperty(propertyUpdateForm: NgForm) {
    this.propertyService
      .updateProperty(
        propertyUpdateForm.value.id,
        propertyUpdateForm.value.name,
        propertyUpdateForm.value.address,
        propertyUpdateForm.value.price,
        propertyUpdateForm.value.people_capacity,
        propertyUpdateForm.value.room,
        propertyUpdateForm.value.mp2,
        propertyUpdateForm.value.description,
        propertyUpdateForm.value.picture
      )
      .subscribe((date) => {
        console.log(date);
      });
  }

  edit(property: Property) {
    this.propertyToUpdate = property;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
