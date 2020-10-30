import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpTripsService } from '../http-trips.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {
  @ViewChild ('tripUp') tripUp:ElementRef;

  trip;
  readyForWork = false;
  numberActivePhoto:number;
  constructor(private httpTripsService:HttpTripsService,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      if (this.httpTripsService.trips === undefined) {
        this.httpTripsService.searchByName(params.linkName)
        .subscribe(
          data => {
            this.trip = data;
            this.readyForWork = true;
          },
          error => console.log(error)
        );
      }
      else { // массив поедок уже загружен
        this.trip = this.httpTripsService.trips.find((item)=>{
          return item.linkName === params.linkName
        })
        this.readyForWork = true;
      }
    })
    this.numberActivePhoto = 0;
  }
  ngAfterViewInit(): void {
    window.scrollTo(pageXOffset, 0);
  }

  changeActivePhoto(number){
    this.numberActivePhoto = number;
  }

}
