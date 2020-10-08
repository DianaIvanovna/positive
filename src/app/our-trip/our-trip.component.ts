import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.scss']
})
export class OurTripComponent implements OnInit {
  trips = [];
  constructor(private tripService:TripService) { }

  ngOnInit(): void {
    this.trips = this.tripService.getTrips();
  }

}
