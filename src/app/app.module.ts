import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AuthorToursComponent } from './author-tours/author-tours.component';
import { OurTripComponent } from './our-trip/our-trip.component';
import { TripComponent } from './trip/trip.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { PositiveIsComponent } from './positive-is/positive-is.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TripInfoComponent } from './trip-info/trip-info.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorToursComponent,
    OurTripComponent,
    TripComponent,
    PhotogalleryComponent,
    PositiveIsComponent,
    ReviewComponent,
    FooterComponent,
    HomeComponent,
    TripInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextMaskModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
