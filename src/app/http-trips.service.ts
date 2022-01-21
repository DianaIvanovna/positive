import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { delay, find, map } from 'rxjs/operators';

interface imgTrip {
  small: string; // 100
  medium: string; //300
  large: string; //780
  origin: string;
}
interface Trip {
  title: string,
  linkName: string,
  shortDescription: string,
  description: string,
  date: string,
  mainImg?: imgTrip,
  photos: imgTrip[],
  imgForTravelPlan: imgTrip,
  time:string,
  place: string,
  travelPlan: string,
  id?: number,
  video?:string,
  price: string,
  number: number,
  bukzaUrl:string,
}

@Injectable({
  providedIn: 'root'
})
export class HttpTripsService {

  constructor(private http: HttpClient ) {
  }
  trips:Trip[]|undefined = undefined;
  tripsSummer:Trip[]|undefined = undefined;
  tripsWinter:Trip[]|undefined = undefined;

  getLoadingTrips(season){
    if (season == 'summer') {
      return this.tripsSummer;
    }
    return this.tripsWinter;
  }

  getTrips(season): Observable<Trip[]>{ // возвращает массив всех поездок
    return this.http.get(`https://app-pozitivtour74.ru/wp-json/wp/v2/trips-${season}?per_page=100`).pipe(
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
          return {
            title: item.acf.title,
            linkName:item.acf.linkName,
            shortDescription: item.acf.shortDescription,
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
            price: item.acf.price,
            number: item.acf.number,
            bukzaUrl:item.acf.bukzaurl,
          }
        })
        .sort((a,b)=>{
          return a.number - b.number;
        });
        if (season == 'summer') return this.tripsSummer = this.trips;
        return this.tripsWinter = this.trips;
      })
    );
  }

}
