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
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
