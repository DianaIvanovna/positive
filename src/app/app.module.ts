import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { AuthorToursComponent } from './author-tours/author-tours.component';
import { OurTripComponent } from './our-trip/our-trip.component';
import { TripComponent } from './trip/trip.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { PositiveIsComponent } from './positive-is/positive-is.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorToursComponent,
    OurTripComponent,
    TripComponent,
    PhotogalleryComponent,
    PositiveIsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
