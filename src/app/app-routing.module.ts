import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripInfoComponent } from './trip-info/trip-info.component';
import { EquipmentRentalComponent } from './equipment-rental/equipment-rental.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },
  {
    path: 'trips',
    component: HomeComponent
  },
  {
    path: 'rent',
    component: EquipmentRentalComponent
  },
  {
    path: ':linkName',
    component: TripInfoComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{
}
