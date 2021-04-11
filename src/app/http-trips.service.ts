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
  small: string; // 100
  medium: string; //300
  large: string; //780
  origin: string;
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

  trips:Trip2[]|undefined = undefined;

  tripsSummer:Trip[]|undefined = undefined;
  indexTrip = 2; // переменная, отвечающая за количество показывающих поездок

  // getTrips(): Observable<Trip[]>{ // возвращает массив всех поездок
  //   return this.http.get("assets/trips.json").pipe(
  //     map(data=>{
  //       let trips = data["trips"];
  //       this.trips = trips.map((trip:Trip, index)=>{
  //         trip.id=index;
  //         trip.mainImg = trip.photos[0];
  //         if (index%2==0) trip.reverseTrip = false;
  //         else trip.reverseTrip = true;
  //         return trip;
  //         });
  //       return this.trips;
  //     })
  //   );
  // }

  getTrips(): Observable<Trip2[]>{ // возвращает массив всех поездок
    return this.http.get("http://cw51374.tmweb.ru/wp-json/wp/v2/trips-summer/").pipe(
      map(data=>{
        this.trips = Object.values(data).map((item)=>{
          let images = Object.values(item.acf.photos).map((img:any)=>{
            return {
              small: img.sizes.thumbnail, //100*100
              medium: img.sizes.medium, // 300
              large: img.sizes.large, // 768
              origin: img.url
            }
          })
          let imgForTravelPlan = {
            small: item.acf.imgForTravelPlan.sizes.thumbnail,
            medium: item.acf.imgForTravelPlan.sizes.medium,
            large: item.acf.imgForTravelPlan.sizes.large,
            origin: item.acf.imgForTravelPlan.url
          }
          let tariff = {
            light: {
              price: item.acf.tariff.price_light,
              advantages: item.acf.tariff.advantages_light,
            },
            standard: {
              price: item.acf.tariff.price_standard,
              advantages: item.acf.tariff.advantages_standard
            },
            vip: {
              price: item.acf.tariff.price_vip,
              advantages: item.acf.tariff.advantages_vip,
            },
          }
          return {
            title: item.acf.title,
            linkName:item.acf.linkName,
            description: item.acf.description,
            date: item.acf.date,
            mainImg: images[0],
            photos: images,
            imgForTravelPlan: imgForTravelPlan,
            time:item.acf.time,
            place: item.acf.place,
            travelPlan: item.acf.travelPlan,
            id: item.acf.id,
            video:item.acf.video,
            tariff: tariff
          }
        })
        return this.trips;
      })
    );
  }

  // searchByName(name){ // возвращает поездку по link
  //   return this.http.get("http://cw51374.tmweb.ru/wp-json/wp/v2/trips-summer/").pipe(
  //     map(data=>{
  //       let trips = data["trips"];
  //       this.trips = trips.map((trip:Trip, index)=>{
  //         trip.id=index;
  //         trip.mainImg = trip.photos[0];
  //         if (index%2==0) trip.reverseTrip = false;
  //         else trip.reverseTrip = true;
  //         return trip;
  //       });

  //       return trips.find((item)=>{
  //         return item.linkName === name
  //       })
  //     })
  //   );
  // }

  searchByName(name){ // возвращает поездку по link
    return this.http.get("http://cw51374.tmweb.ru/wp-json/wp/v2/trips-summer/").pipe(
      map(data=>{
        this.trips = Object.values(data).map((item)=>{
          let images = Object.values(item.acf.photos).map((img:any)=>{
            return {
              small: img.sizes.thumbnail, //100*100
              medium: img.sizes.medium, // 300
              large: img.sizes.large, // 768
              origin: img.url
            }
          })
          let imgForTravelPlan = {
            small: item.acf.imgForTravelPlan.sizes.thumbnail,
            medium: item.acf.imgForTravelPlan.sizes.medium,
            large: item.acf.imgForTravelPlan.sizes.large,
            origin: item.acf.imgForTravelPlan.url
          }
          let tariff = {
            light: {
              price: item.acf.tariff.price_light,
              advantages: item.acf.tariff.advantages_light,
            },
            standard: {
              price: item.acf.tariff.price_standard,
              advantages: item.acf.tariff.advantages_standard
            },
            vip: {
              price: item.acf.tariff.price_vip,
              advantages: item.acf.tariff.advantages_vip,
            },
          }
          return {
            title: item.acf.title,
            linkName:item.acf.linkName,
            description: item.acf.description,
            date: item.acf.date,
            mainImg: images[0],
            photos: images,
            imgForTravelPlan: imgForTravelPlan,
            time:item.acf.time,
            place: item.acf.place,
            travelPlan: item.acf.travelPlan,
            id: item.acf.id,
            video:item.acf.video,
            tariff: tariff
          }
        })
        return  this.trips.find((item)=>{
          return item.linkName === name
        })

      })
    );
  }
}
