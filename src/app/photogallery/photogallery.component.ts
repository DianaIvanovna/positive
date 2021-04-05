import { Component, Input, OnInit, } from '@angular/core';
import { HttpPhotosService } from "../http-photos.service";

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  @Input() season;
  urlBigPhoto = "";
  bigPhoto = {
    photo: '',
    description: '',
    index: undefined,
  }
  activeButtonBigPhotoLeft = true;
  activeButtonBigPhotoRight = true;

  activeButtonLeft = false;
  activeButtonRight = true;
  photoPages = 0;
  photoPagesActive = 0;
  photosActive = [];

  constructor(private httpPhotosService:HttpPhotosService) { }

  ngOnInit(): void {

    this.httpPhotosService.getPhotos()
    .subscribe(
      data => {
        this.photosActive = this.httpPhotosService.getPartPhoto(this.photoPagesActive);
        this.photoPages = this.httpPhotosService.photos.length;
      },
      error => console.log(error)
    );
  }
  next(event){
    event.preventDefault();
    if (this.photoPagesActive!==this.photoPages-1){
      this.photoPagesActive++;
      this.activeButtonLeft = true;
      this.photosActive = this.httpPhotosService.getPartPhoto(this.photoPagesActive);
    }
    if (this.photoPagesActive===this.photoPages-1) this.activeButtonRight = false;
  }
  previous(event){
    event.preventDefault();
    if (this.photoPagesActive!==0){
      this.photoPagesActive--;
      this.activeButtonRight=true;
      this.photosActive = this.httpPhotosService.getPartPhoto(this.photoPagesActive);
    }
    if (this.photoPagesActive===0) this.activeButtonLeft = false;
  }
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.bigPhoto.photo = ""
    }
  }
  openBigPhoto(photo, index){
    this.bigPhoto.photo = photo.photo;
    this.bigPhoto.description= photo.description;
    this.bigPhoto.index = index;
    this.activeButtonBigPhotoLeft = true;
      this.activeButtonBigPhotoRight = true;
    if (index === 0){
      this.activeButtonBigPhotoLeft = false;
    }else if (index === this.photosActive.length - 1){
      this.activeButtonBigPhotoRight = false;
    }
  }
  nextBigPhoto(event){
    event.preventDefault();
    if (this.bigPhoto.index !== this.photosActive.length - 1){
      this.activeButtonBigPhotoLeft = true;
      this.bigPhoto.index+=1;
      this.bigPhoto.photo = this.photosActive[this.bigPhoto.index].photo;
      this.bigPhoto.description = this.photosActive[this.bigPhoto.index].description;
    }
    if (this.bigPhoto.index === this.photosActive.length - 1){
      this.activeButtonBigPhotoRight = false;
    }
  }
  previousBigPhoto($event){
    event.preventDefault();
    if (this.bigPhoto.index !== 0){
      this.activeButtonBigPhotoRight = true;
      this.bigPhoto.index--;
      this.bigPhoto.photo = this.photosActive[this.bigPhoto.index].photo;
      this.bigPhoto.description = this.photosActive[this.bigPhoto.index].description;
    }
    if (this.bigPhoto.index === 0){
      this.activeButtonBigPhotoLeft = false;
    }

  }

}


