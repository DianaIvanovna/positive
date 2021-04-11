import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

interface RentSummer {
  title:string;
  price_1:string;
  price_2:string;
  price_3:string;
  price_4:string;
  price_5:string;
  price_6:string;
  price_7:string;
  deposit:string;
  img:string;
  number: number;
}
interface RentWinter {
  title:string;
  description?:string;
  price_1: {
    price_positive: string;
    price: string;
  }
  price_2: {
    price_positive: string;
    price: string;
  }
  price_3: {
    price_positive: string;
    price: string;
  }
  price_4: {
    price_positive: string;
    price: string;
  }
  img:string;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpRentsService {

  rentSummer:RentSummer[]|undefined = undefined
  rentWinter:RentWinter[]|undefined = undefined


  constructor(private http: HttpClient ) {
  }

  getLoadingRents(season){
    console.log(season);
    if (season == 'summer') {
      console.log(this.rentSummer)
      return this.rentSummer;
    }
    console.log(this.rentWinter)
    return this.rentWinter;
  }
  getRentsSummer(): Observable<RentWinter[]>{
    return this.http.get(`http://cw51374.tmweb.ru/wp-json/wp/v2/rents-summer/`).pipe(
      map(data=>{
        return this.rentWinter =
        Object.values(data)
          .map((item)=>{
            return {
              title:item.acf.title,
              description:item.acf.description,
              price_1:{
                price_positive:item.acf.price_1.price_positive,
                price: item.acf.price_1.price,
              },
              price_2:{
                price_positive:item.acf.price_2.price_positive,
                price: item.acf.price_2.price,
              },
              price_3:{
                price_positive:item.acf.price_3.price_positive,
                price: item.acf.price_3.price,
              },
              price_4:{
                price_positive:item.acf.price_4.price_positive,
                price: item.acf.price_4.price,
              },
              img:item.acf.img.sizes.large,
              number: item.acf.number
            };
          })
          .sort((a,b)=>{
            return a.number - b.number;
          });
      })
    )
  }

  getRentsWinter(): Observable<RentSummer[]>{
    return this.http.get(`http://cw51374.tmweb.ru/wp-json/wp/v2/rents-winter/`).pipe(
      map(data=>{
        return this.rentSummer =
          Object.values(data)
          .map((item)=>{
            return {
              title:item.acf.title,
              price_1:item.acf.price_1,
              price_2:item.acf.price_2,
              price_3:item.acf.price_3,
              price_4:item.acf.price_4,
              price_5:item.acf.price_5,
              price_6:item.acf.price_6,
              price_7:item.acf.price_7,
              deposit:item.acf.deposit,
              img:item.acf.img.sizes.large,
              number: item.acf.number
            };
          })
          .sort((a,b)=>{
            return a.number - b.number;
          });
      })
    )
  }

}
