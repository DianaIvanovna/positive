import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { delay, find, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpPhotosService {

  constructor(private http: HttpClient ) {
  }


  photos:any = [];

  getPhotos(): Observable<any>{ // возвращает массив всех поездок
    return this.http.get("assets/photos.json").pipe(
      map(data=>{
        let photos = data["photos"];
        for (let i=0 ; i < photos.length; i+=8){
          this.photos.push(photos.slice(i, i+8));
        }
        return this.photos;
      })
    );
  }
  getPartPhoto(index){
    if (this.photos.length !== 0) return this.photos[index];
  }

}
