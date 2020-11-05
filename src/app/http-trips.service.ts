import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { delay, find, map } from 'rxjs/operators';

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
  price: string,
  travelPlan: string,
  reverseTrip?: boolean,
  id?: number,
  video?:string
}

@Injectable({
  providedIn: 'root'
})
export class HttpTripsService {

  constructor(private http: HttpClient ) {
  }

  trips:Trip[]|undefined = undefined;
  indexTrip = 2; // переменная, отвечающая за количество показывающих поездок

  getTrips(): Observable<Trip[]>{ // возвращает массив всех поездок
    return this.http.get("assets/trips.json").pipe(
      map(data=>{
        let trips = data["trips"];
        this.trips = trips.map((trip:Trip, index)=>{
          trip.id=index;
          trip.mainImg = trip.photos[0];
          if (index%2==0) trip.reverseTrip = false;
          else trip.reverseTrip = true;
          return trip;
          });
        return this.trips;
      })
    );
  }

  searchByName(name){ // возвращает поездку по link
    return this.http.get("assets/trips.json").pipe(
      map(data=>{
        let trips = data["trips"];
        this.trips = trips.map((trip:Trip, index)=>{
          trip.id=index;
          trip.mainImg = trip.photos[0];
          if (index%2==0) trip.reverseTrip = false;
          else trip.reverseTrip = true;
          return trip;
        });

        return trips.find((item)=>{
          return item.linkName === name
        })
      })
    );
  }
}
