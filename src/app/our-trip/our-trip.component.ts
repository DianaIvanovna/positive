import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TripService } from '../trip.service';


@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.scss']
})
export class OurTripComponent implements OnInit {
  trips = [];
  tripsShown = [];
  hideButton= false;

  constructor(private tripService:TripService) { }

  ngOnInit(): void {
    this.trips = this.tripService.getTrips();
    if (this.tripService.indexTrip == this.trips.length) this.hideButton = true;
    this.tripsShown = this.trips.slice(0, this.tripService.indexTrip); // показать первые 2 поездки
  }

  showMore(){
    this.hideButton = true;
    this.tripsShown = this.trips;
    this.tripService.indexTrip = this.trips.length;
  }
}


