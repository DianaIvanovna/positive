import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {

  trip;
  numberActivePhoto:number;
  constructor(private tripService:TripService,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.trip=this.tripService.searchByName(params.linkName);
    })
    this.numberActivePhoto = 0;
  }

  changeActivePhoto(number){
    this.numberActivePhoto = number;
  }

}
