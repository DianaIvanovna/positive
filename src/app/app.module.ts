import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { TariffComponent } from './tariff/tariff.component';
import { EquipmentRentalComponent } from './equipment-rental/equipment-rental.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { RentalBrandsComponent } from './rental-brands/rental-brands.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentContainerComponent } from './equipment-container/equipment-container.component';
import { ServiceRentComponent } from './service-rent/service-rent.component';
import { PreviewComponent } from './preview/preview.component';
import { GoUpComponent } from './go-up/go-up.component';
import { SliderComponent } from './slider/slider.component';
import { TripVideoComponent } from './trip-video/trip-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurTripComponent,
    TripComponent,
    PhotogalleryComponent,
    PositiveIsComponent,
    ReviewComponent,
    FooterComponent,
    HomeComponent,
    TripInfoComponent,
    TariffComponent,
    EquipmentRentalComponent,
    WelcomeSectionComponent,
    RentalBrandsComponent,
    EquipmentComponent,
    EquipmentContainerComponent,
    ServiceRentComponent,
    PreviewComponent,
    GoUpComponent,
    SliderComponent,
    TripVideoComponent,
  ],
  imports: [
    BrowserModule,
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
