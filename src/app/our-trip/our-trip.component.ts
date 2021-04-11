import { Component, OnInit } from '@angular/core';
import { HttpTripsService } from '../http-trips.service';


@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.scss']
})
export class OurTripComponent implements OnInit {
  trips = [];
  // tripsShown = [];
  // hideButton= false;
  readyForWork = false;

  constructor(private httpTripsService:HttpTripsService) {
  }
  ngOnInit(): void {
    if (this.httpTripsService.trips === undefined){
      this.httpTripsService.getTrips()
      .subscribe(
        data => {
          this.trips = data;
          this.readyForWork = true;
          // if (this.trips.length <= this.httpTripsService.indexTrip) this.hideButton = true;
          // this.tripsShown = this.trips.slice(0, this.httpTripsService.indexTrip);

        },
        error => console.log(error)
      );
      this.httpTripsService.getTrips2()
      .subscribe(
        data => {
          // if (this.trips.length <= this.httpTripsService.indexTrip) this.hideButton = true;
          // this.tripsShown = this.trips.slice(0, this.httpTripsService.indexTrip);

        },
        error => console.log(error)
      );
    } else { // массив поедок уже загружен
      this.trips = this.httpTripsService.trips;
      this.readyForWork = true;

      // if (this.trips.length <= this.httpTripsService.indexTrip) this.hideButton = true;
      // if (this.httpTripsService.indexTrip == this.trips.length) this.hideButton = true;
      // this.tripsShown = this.trips.slice(0, this.httpTripsService.indexTrip);
    }
  }


  // showMore(){
  //   this.hideButton = true;
  //   this.tripsShown = this.trips;
  //   this.httpTripsService.indexTrip = this.trips.length;
  // }
}



