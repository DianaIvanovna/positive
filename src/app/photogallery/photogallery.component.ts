import { Component, OnInit, } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  urlBigPhoto = "";
  bigPhoto = {
    photo: '',
    description: '',
  }

  activeButtonLeft = false;
  activeButtonRight = true;
  photoPages = 0;
  photoPagesActive = 0;
  photosActive = [];

  constructor(private photosService:PhotosService,) { }

  ngOnInit(): void {
    this.photosActive = this.photosService.getphoto(this.photoPagesActive);
    this.photoPages = this.photosService.photos.length;
  }
  next(event){
    event.preventDefault();
    if (this.photoPagesActive!==this.photoPages-1){
      this.photoPagesActive++;
      this.activeButtonLeft = true;
      this.photosActive = this.photosService.getphoto(this.photoPagesActive);
    }
    if (this.photoPagesActive===this.photoPages-1) this.activeButtonRight = false;
  }
  previous(event){
    event.preventDefault();
    if (this.photoPagesActive!==0){
      this.photoPagesActive--;
      this.activeButtonRight=true;
      this.photosActive = this.photosService.getphoto(this.photoPagesActive);
    }
    if (this.photoPagesActive===0) this.activeButtonLeft = false;
  }
  closePopup(event){
    if (event.target.classList.contains('popup')){
      this.bigPhoto.photo = ""
    }
  }
}


