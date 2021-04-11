import { Component, OnInit, Input } from '@angular/core';
import { HttpTripsService } from '../http-trips.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.scss']
})
export class OurTripComponent implements OnInit {
  season='summer';
  trips = [];
  readyForWork = false;

  constructor(private httpTripsService:HttpTripsService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.season){
        this.season = params.season;
      }
    })

    if (this.httpTripsService.getLoadingTrips(this.season) === undefined){
      this.httpTripsService.getTrips(this.season)
      .subscribe(
        data => {
          this.trips = data;
          this.readyForWork = true;

        },
        error => console.log(error)
      );
    } else { // массив поедок уже загружен
      this.trips = this.httpTripsService.getLoadingTrips(this.season);
      this.readyForWork = true;
    }
  }




  // showMore(){
  //   this.hideButton = true;
  //   this.tripsShown = this.trips;
  //   this.httpTripsService.indexTrip = this.trips.length;
  // }
}



