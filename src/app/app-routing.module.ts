import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripInfoComponent } from './trip-info/trip-info.component';
import { EquipmentRentalComponent } from './equipment-rental/equipment-rental.component';


const routes: Routes = [
  {
    path: '',
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
    component: HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{
}
