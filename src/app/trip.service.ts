import { Injectable } from '@angular/core';

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
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  trips: Trip[]= [
    {
      title: "Поездка на банное",
      linkName: "Поездка_на_банное",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.",
      date: "23.11.2020 - 27.11.2020",
      photos: [
        "./assets/img/фото поездки.jpg",
        "./assets/img/фото7.jpg",
        "./assets/img/фото7.jpg",
        "./assets/img/фото7.jpg",
        "./assets/img/фото7.jpg",
      ],
      time: "10:00-17:00",
      numberOfPersons: 15,
      place: "Челябинская обл. Магнитогорск",
      price: "15 000",
      imgForTravelPlan: "./assets/img/фото7.jpg",
      travelPlan: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. `,
    },
    {
      title: "Поездка на банное 2",
      linkName: "Поездка_на_банное_2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.",
      date: "23.11.2020 - 27.11.2020",
      photos: [
        "./assets/img/фото1.jpg",
        "./assets/img/фото6.jpg",
        "./assets/img/фото5.jpg",
        "./assets/img/фото5.jpg",
        "./assets/img/фото3.jpg",
      ],
      time: "10:00-17:00",
      numberOfPersons: 10,
      place: "Челябинская обл. Магнитогорск",
      price: "10 000",
      imgForTravelPlan: "./assets/img/фото3.jpg",
      travelPlan: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. `,
    },
    {
      title: "Поездка 3",
      linkName: "Поездка_3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.",
      date: "23.11.2020 - 27.11.2020",
      photos: [
        "./assets/img/фото5.jpg",
        "./assets/img/фото6.jpg",
        "./assets/img/фото1.jpg",
        "./assets/img/фото2.jpg",
        "./assets/img/фото3.jpg",
      ],
      time: "10:00-17:00",
      numberOfPersons: 10,
      place: "Челябинская обл. Магнитогорск",
      price: "10 000",
      imgForTravelPlan: "./assets/img/фото1.jpg",
      travelPlan: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. Pharetra, lorem nulla cras malesuada auctor tincidunt pretium non ac. Lacus ipsum praesent eu, mi eu phasellus et. Ut ut augue arcu magna vel nunc tellus enim. Vel adipiscing diam convallis turpis. Quis dictum id sit commodo viverra ullamcorper consectetur non ullamcorper.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl, ullamcorper rhoncus odio egestas. Cursus neque netus nulla eu ac. Massa augue duis urna donec. `,
    }
  ];
  constructor() {
    this.trips.forEach((item, index)=>{
      item.id=index;
      item.mainImg = item.photos[0];
      if (index%2==0) item.reverseTrip = false;
      else item.reverseTrip = true;
    })
  }

  getTrips(): Trip[]{
    return this.trips;
  }
  searchByName(name): Trip{
    return this.trips.find((item)=>{
      return item.linkName === name
    })
  }
}
