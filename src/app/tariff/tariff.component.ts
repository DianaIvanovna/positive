import { Component, Input, OnInit } from '@angular/core';
interface Trip {
  title: string;
  linkName: string;
  description: string,
  date: string,
  mainImg?: string,
  photos: string[],
  imgForTravelPlan: string,
  time:string;
  numberOfPersons: number,
  place: string,
  minPrice: string,
  travelPlan: string,
  reverseTrip?: boolean,
  id?: number,
  video?:string,
}


@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  @Input() trip: Trip;
  constructor() { }

  ngOnInit(): void {
  }

}
