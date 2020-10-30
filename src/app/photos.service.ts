import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photosWinter1 = [
    {
      photo: "./assets/img/winter/-fklAed-I7I.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/2FHu_VZd0mg.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/8PzQWd0iLT8.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/9Uz15lLBxEU.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/AOABzc_GQHU.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/CMdOaARm1P0.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/dc5glK81sxw.jpg",
      description: 'lorem2'
    },
    {
      photo: "./assets/img/winter/DIpSRjaQpmE.jpg",
      description: 'lorem2'
    }
  ]
  photosWinter2 = [
    {
      photo: "./assets/img/winter/f3J9zuSR3gI.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/fai8zqp0a7k.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/GkB7JsYQoB0.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/HOVYFlh9Jgw.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/j2CJg5zxABU.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/KZwmkL05bZg.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/lsqCu68_1l0.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    },
    {
      photo: "./assets/img/winter/LyGFamEPQG0.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur commodi debitis architecto labore sunt! Quaerat, iusto? Ullam, libero delectus!'
    }
  ];
  photosWinter3 = [
    {
      photo: "./assets/img/winter/MRrnbzInVSk.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/nSijca-c8c0.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/oCY_z7a5NAQ.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/PAATbc5TPxw.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/PlTnc1Hl0q4.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/QCHTTnxzo40.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/Tnx9NBcpoX0.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/VNfevmgMLBw.jpg",
      description: ''
    }
  ];
  photosDifferent= [

    {
      photo: "./assets/img/winter/W-bIeULPLKY.jpg",
      description: ''
    },
    {
      photo: "./assets/img/winter/yNm2x1m7aFQ.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/UrUjOv5bRvs.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/xarx0pLfqJc.jpg",
      description: ''
    },
  ];
  photosSummer1=[
    {
      photo: "./assets/img/summer/3HkQEkdq4yM.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/cm223TVKrV0.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/GctqsmYo7Uo.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/j-V8A9ebALU.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/lvuw0adjd7E.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/MelfH6n5qbw.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/osHVPNbGEWs.jpg",
      description: ''
    },
    {
      photo: "./assets/img/summer/rVRYHAllMpw.jpg",
      description: ''
    },
  ]

  //массив photos - состоит из массивов по 8 фотографий
  photos = [this.photosWinter1, this.photosWinter2, this.photosWinter3, this.photosSummer1, this.photosDifferent]
  constructor() { }

  getphoto(index){
    return this.photos[index];
  }
}
