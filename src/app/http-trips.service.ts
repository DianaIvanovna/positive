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
  travelPlan: string,
  reverseTrip?: boolean,
  id?: number,
  video?:string,
  tariff: {
    light: {
      price: string,
      advantages: string[],
    },
    standard: {
      price: string,
      advantages: string[],
    },
    vip: {
      price: string,
      advantages: string[],
    }
  }
}
interface imgTrip {
  small: string;
  medium: string;
  large: string;
}
interface Trip2 {
  title: string;
  linkName: string;
  description: string,
  date: string,
  mainImg?: imgTrip,
  photos: imgTrip[],
  imgForTravelPlan: imgTrip,
  time:string;
  place: string,
  travelPlan: string,
  id?: number,
  video?:string,
  tariff: {
    light: {
      price: string,
      advantages: string,
    },
    standard: {
      price: string,
      advantages: string,
    },
    vip: {
      price: string,
      advantages: string,
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class HttpTripsService {

  constructor(private http: HttpClient ) {
  }

  trips:Trip[]|undefined = undefined;

  tripsSummer:Trip2[]|undefined = undefined;
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

  getTrips2(): Observable<any>{ // возвращает массив всех поездок
    return this.http.get("http://cw51374.tmweb.ru/wp-json/wp/v2/trips-summer/").pipe(
      map(data=>{
        console.log(data);
        // return result = Object.values(data).map((item)=>{
        //   let images = Object.values(item.acf.photos).map((img)=>{
        //     return {
        //       small: img.sizes.thumbnail,
        //       medium: img.sizes.medium,
        //       large: img.sizes.large
        //     }
        //   })
        //   let imgForTravelPlan = {
        //     small: item.acf.imgForTravelPlan.sizes.thumbnail,
        //     medium: item.acf.imgForTravelPlan.sizes.medium,
        //     large: item.acf.imgForTravelPlan.sizes.large
        //   }
        //   let tariff = {
        //     light: item.acf.light? {
        //       price: item.acf.tariff.price_light,
        //       advantages: item.acf.tariff.advantages_light,
        //     }: null,
        //     standard: item.acf.standard? {
        //       price: item.acf.tariff.price_standard,
        //       advantages: item.acf.tariff.advantages_standard,
        //     }: null,
        //     vip: item.acf.standard? {
        //       price: item.acf.tariff.price_vip,
        //       advantages: item.acf.tariff.advantages_vip,
        //     }: null,
        //   }
        //   return {
        //     title: item.acf.title,
        //     linkName:item.acf.linkName,
        //     description: item.acf.description,
        //     date: item.acf.date,
        //     mainImg: images[0],
        //     photos: images,
        //     imgForTravelPlan: imgForTravelPlan,
        //     time:item.acf.time,
        //     place: item.acf.place,
        //     travelPlan: item.acf.travelPlan,
        //     id: item.acf.id,
        //     video:item.acf.video,
        //     tariff: tariff
        //   }
        // })
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
