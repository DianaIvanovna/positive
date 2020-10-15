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
  indexTrip;
  hideButton= false;

  constructor(private tripService:TripService) { }

  ngOnInit(): void {
    this.trips = this.tripService.getTrips();
    this.tripsShown = this.trips.slice(0,2);
    this.indexTrip = 2;
  }

  showMore(){
    if (this.indexTrip == this.trips.length-1){
      this.indexTrip +=1;
    }
    else{
      this.indexTrip +=2;
    }
    this.tripsShown = this.trips.slice(0,this.indexTrip);
    if (this.indexTrip == this.trips.length){
      this.hideButton = true;
    }
  }

}


